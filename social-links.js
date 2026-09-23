(function () {
  var SocialLinks = {
    items: [
      { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/sausagebreadstudio/' },
      { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@SausageBreadStudio/' },
      { id: 'reddit', label: 'Reddit', url: 'https://www.reddit.com/user/SausageBreadStudio/' },
      { id: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@SausageBreadStudio/' }
    ],

    render: function (container) {
      container.textContent = '';
      var iconsOnly = container.dataset.socialLinks === 'icons';
      this.items.forEach(function (item) {
        var link = document.createElement('a');
        link.href = item.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';

        if (iconsOnly) {
          link.setAttribute('aria-label', item.label);
          link.title = item.label;
          var glyph = document.createElement('span');
          glyph.className = 'social-icon social-icon-' + item.id;
          glyph.setAttribute('aria-hidden', 'true');
          link.appendChild(glyph);
          container.appendChild(link);
          return;
        }

        var circle = document.createElement('span');
        circle.className = 'icon-circle icon-' + item.id;

        var icon = document.createElement('span');
        icon.className = 'social-icon social-icon-' + item.id;
        icon.setAttribute('aria-hidden', 'true');

        circle.appendChild(icon);
        link.appendChild(circle);
        link.appendChild(document.createTextNode(item.label));
        container.appendChild(link);
      });
    },

    renderAll: function () {
      var self = this;
      document.querySelectorAll('[data-social-links]').forEach(function (el) {
        self.render(el);
      });
    }
  };

  window.SocialLinks = SocialLinks;
  SocialLinks.renderAll();
})();
