/**
 * @file
 * Open Y Carnation JS.
 */
(function ($) {
  "use strict";

  /**
   * Move Header Banner paragraph to header.
   */
  Drupal.behaviors.openyMoveBanners = {
    attach: function (context, settings) {
      var bannerHeader = $('.paragraph--type--banner, .landing-header, .page-heading');
      if (bannerHeader.length > 0) {
        $('.banner-zone-node').once('openy-move-banners').append(bannerHeader.eq(0));
        $('body').addClass('with-banner');
      }
      else {
        $('body').addClass('without-banner');
      }
    }
  };

  /**
   * Ensure breadcrumbs are after banners in the DOM
   */
  Drupal.behaviors.openyMoveBreadcrumbs = {
    attach: function (context, settings) {
      var breadCrumbs = $('.breadcrumbs-wrapper', context);
      var bannerCta = $(
        '.banner-zone-node .banner .banner-cta, ' +
        '.banner-zone-node .landing-header, ' +
        '.banner-zone-node .paragraph-gallery', context);
      if (breadCrumbs.length && bannerCta.length) {
        breadCrumbs.once('openy-move-breadcrumbs').appendTo(bannerCta);
      }
    }
  };

  /**
   * Ensure header alerts are after breadcrumbs in the DOM
   */
  Drupal.behaviors.openyMoveHeaderAlerts = {
    attach: function (context, settings) {
      var headerAlerts = $('.block-openy-carnation-views-block-alerts-header-alerts', context);
      var subHeaderFilters = $('.banner-cta', context);
      if (headerAlerts.length && subHeaderFilters.length) {
        headerAlerts.once('openy-move-alerts').insertAfter(subHeaderFilters);
      }
    }
  };
})(jQuery);
