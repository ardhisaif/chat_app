import consumer from "./consumer";

document.addEventListener("turbolinks:load", () => {
  $('[data-channel-subscribe="room"]').each(function (index, element) {
    const $element = $(element);
    const room_id = $element.data("room-id");
    const messageTemplate = $('[data-role="message-template"]');

    App.room = consumer.subscriptions.create(
      { channel: "RoomChannel", room: room_id },
      {
        received(data) {
          const content = messageTemplate.children().clone(true, true);
          content.find('[data-role="user-avatar"]').attr('src', data.user_avatar_url);
          content.find('[data-role="message-text"]').text(data.message);
          content.find('[data-role="message-date"]').text(data.updated_at);
          $element.append(content);
          $element.animate({ scrollTop: $element.prop("scrollHeight") }, 1000);
        },
      }
    );
  });
});
