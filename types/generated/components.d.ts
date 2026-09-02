import type { Schema, Struct } from '@strapi/strapi';

export interface FooterFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_columns';
  info: {
    displayName: 'footer-column';
  };
  attributes: {
    href: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.nav-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterFooterContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_contact_infos';
  info: {
    displayName: 'footer-contact-info';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface FooterSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'social-link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['linkedin', 'twitter', 'youtube', 'facebook']
    >;
    url: Schema.Attribute.String;
  };
}

export interface HomeHeroStat extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_stats';
  info: {
    displayName: 'hero-stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface HomeTrustBarItem extends Struct.ComponentSchema {
  collectionName: 'components_home_trust_bar_items';
  info: {
    displayName: 'trust-bar-item';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface PageCertificationItem extends Struct.ComponentSchema {
  collectionName: 'components_page_certification_items';
  info: {
    displayName: 'certification-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageDownload extends Struct.ComponentSchema {
  collectionName: 'components_page_downloads';
  info: {
    displayName: 'download';
  };
  attributes: {
    description: Schema.Attribute.Text;
    downloads: Schema.Attribute.Component<'shared.download-item', true>;
    name: Schema.Attribute.String;
  };
}

export interface PageFeatures extends Struct.ComponentSchema {
  collectionName: 'components_page_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    feature: Schema.Attribute.Component<'shared.item-feature', true>;
  };
}

export interface PageHero extends Struct.ComponentSchema {
  collectionName: 'components_page_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Media<'images'>;
    heroImageAlt: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
  };
}

export interface PageImageTitle extends Struct.ComponentSchema {
  collectionName: 'components_page_image_titles';
  info: {
    displayName: 'media\u2011card\u2011item';
  };
  attributes: {
    feature: Schema.Attribute.Component<'shared.item-feature', true>;
    image: Schema.Attribute.Media<'images', true>;
    imageAlt: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface PageIpFeatures extends Struct.ComponentSchema {
  collectionName: 'components_page_ip_features';
  info: {
    displayName: 'infoes';
  };
  attributes: {
    info: Schema.Attribute.Component<'shared.ip-features', true>;
  };
}

export interface PageSeriesSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_page_series_specifications';
  info: {
    displayName: 'seriesSpecifications';
  };
  attributes: {
    CCT_range: Schema.Attribute.String;
    Chip_density: Schema.Attribute.String;
    CRI: Schema.Attribute.String;
    Cutting_length: Schema.Attribute.String;
    IP_rating: Schema.Attribute.String;
    name: Schema.Attribute.String;
    Output: Schema.Attribute.String;
    PCB_width: Schema.Attribute.String;
    tag: Schema.Attribute.Enumeration<['standard', 'premium', 'ultra']>;
    Typical_application: Schema.Attribute.String;
    Voltage: Schema.Attribute.String;
  };
}

export interface PageStats extends Struct.ComponentSchema {
  collectionName: 'components_page_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    stat: Schema.Attribute.Component<'home.hero-stat', true>;
  };
}

export interface ProductProductSpecs extends Struct.ComponentSchema {
  collectionName: 'components_product_product_specs';
  info: {
    displayName: 'specs';
  };
  attributes: {
    isKey: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String;
  };
}

export interface ProductSpecGroup extends Struct.ComponentSchema {
  collectionName: 'components_product_spec_groups';
  info: {
    displayName: 'spec-group';
  };
  attributes: {
    name: Schema.Attribute.String;
    spec: Schema.Attribute.Component<'product.product-specs', true>;
  };
}

export interface SharedBtn extends Struct.ComponentSchema {
  collectionName: 'components_shared_btns';
  info: {
    displayName: 'btn';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedDownloadItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_download_items';
  info: {
    displayName: 'download-item';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    isKey: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedIpFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_ip_features';
  info: {
    displayName: 'info\u2011item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedItemFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_item_features';
  info: {
    displayName: 'text\u2011item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'nav-link';
  };
  attributes: {
    children: Schema.Attribute.Component<'shared.nav-link-child', true>;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNavLinkChild extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_link_children';
  info: {
    displayName: 'nav-link-child';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_metas';
  info: {
    displayName: 'seo-meta';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images'>;
    ogImageAlt: Schema.Attribute.String;
  };
}

export interface SharedTagItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_tag_items';
  info: {
    displayName: 'tag-item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'footer.footer-column': FooterFooterColumn;
      'footer.footer-contact-info': FooterFooterContactInfo;
      'footer.social-link': FooterSocialLink;
      'home.hero-stat': HomeHeroStat;
      'home.trust-bar-item': HomeTrustBarItem;
      'page.certification-item': PageCertificationItem;
      'page.download': PageDownload;
      'page.features': PageFeatures;
      'page.hero': PageHero;
      'page.image-title': PageImageTitle;
      'page.ip-features': PageIpFeatures;
      'page.series-specifications': PageSeriesSpecifications;
      'page.stats': PageStats;
      'product.product-specs': ProductProductSpecs;
      'product.spec-group': ProductSpecGroup;
      'shared.btn': SharedBtn;
      'shared.download-item': SharedDownloadItem;
      'shared.images': SharedImages;
      'shared.ip-features': SharedIpFeatures;
      'shared.item-feature': SharedItemFeature;
      'shared.nav-link': SharedNavLink;
      'shared.nav-link-child': SharedNavLinkChild;
      'shared.seo-meta': SharedSeoMeta;
      'shared.tag-item': SharedTagItem;
    }
  }
}
