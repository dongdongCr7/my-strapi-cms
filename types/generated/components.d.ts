import type { Schema, Struct } from '@strapi/strapi';

export interface FooterFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_columns';
  info: {
    displayName: 'footer-column';
  };
  attributes: {
    footerNavHref: Schema.Attribute.String;
    footerNavTitle: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.nav-link', true>;
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
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ProductSpec extends Struct.ComponentSchema {
  collectionName: 'components_product_specs';
  info: {
    displayName: 'spec';
  };
  attributes: {
    isKey: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
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
    specs: Schema.Attribute.Component<'product.spec', true>;
  };
}

export interface SharedBtn extends Struct.ComponentSchema {
  collectionName: 'components_shared_btns';
  info: {
    displayName: 'btn';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SharedCertificationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_certification_items';
  info: {
    displayName: 'certification-item';
  };
  attributes: {
    certificationName: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    imageAlt: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedDownload extends Struct.ComponentSchema {
  collectionName: 'components_shared_downloads';
  info: {
    displayName: 'download';
  };
  attributes: {
    description: Schema.Attribute.Text;
    downloads: Schema.Attribute.Component<'shared.download-item', false>;
    name: Schema.Attribute.String;
  };
}

export interface SharedDownloadItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_download_items';
  info: {
    displayName: 'download-item';
  };
  attributes: {
    file: Schema.Attribute.Media<'files', true>;
    name: Schema.Attribute.String;
    size: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
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

export interface SharedImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageAlt: Schema.Attribute.String;
    isKey: Schema.Attribute.Boolean;
  };
}

export interface SharedInfoItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_items';
  info: {
    displayName: 'info\u2011item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedInfoItemList extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_item_lists';
  info: {
    displayName: 'info-item-list';
  };
  attributes: {
    info: Schema.Attribute.Component<'shared.info-item', true>;
  };
}

export interface SharedLabelItemList extends Struct.ComponentSchema {
  collectionName: 'components_shared_label_item_lists';
  info: {
    displayName: 'label-item-list';
  };
  attributes: {
    labelItem: Schema.Attribute.Component<'shared.tag-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMediaCardItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_card_items';
  info: {
    displayName: 'media\u2011card\u2011item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    name: Schema.Attribute.String;
    textItem: Schema.Attribute.Component<'shared.text-item', true>;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'nav-link';
  };
  attributes: {
    children: Schema.Attribute.Component<'shared.nav-link-child', true>;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    openNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedNavLinkChild extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_link_children';
  info: {
    displayName: 'nav-link-child';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    openNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedOptionItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_option_items';
  info: {
    displayName: 'option-item';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedOptionItemList extends Struct.ComponentSchema {
  collectionName: 'components_shared_option_item_lists';
  info: {
    displayName: 'option-item-list';
  };
  attributes: {
    optionItem: Schema.Attribute.Component<'shared.option-item', true>;
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

export interface SharedSocialMediaItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_media_items';
  info: {
    displayName: 'social-media-item';
  };
  attributes: {
    mediaHref: Schema.Attribute.String;
    mediaImage: Schema.Attribute.Media<'images'>;
    mediaImageAlt: Schema.Attribute.String;
    mediaName: Schema.Attribute.String;
  };
}

export interface SharedSpecRowItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_spec_row_items';
  info: {
    displayName: 'spec-row-item';
  };
  attributes: {
    specName: Schema.Attribute.String;
    values: Schema.Attribute.Component<'shared.tag-item', true>;
  };
}

export interface SharedTagItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_tag_items';
  info: {
    displayName: 'label-item';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface SharedTextItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_items';
  info: {
    displayName: 'text\u2011item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedTextItemList extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_item_lists';
  info: {
    displayName: 'text\u2011item\u2011list';
  };
  attributes: {
    textItem: Schema.Attribute.Component<'shared.text-item', true>;
  };
}

export interface SharedTrustBarItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_trust_bar_items';
  info: {
    displayName: 'trust-bar-item';
  };
  attributes: {
    icon: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'footer.footer-column': FooterFooterColumn;
      'footer.footer-contact-info': FooterFooterContactInfo;
      'footer.social-link': FooterSocialLink;
      'product.spec': ProductSpec;
      'product.spec-group': ProductSpecGroup;
      'shared.btn': SharedBtn;
      'shared.certification-item': SharedCertificationItem;
      'shared.download': SharedDownload;
      'shared.download-item': SharedDownloadItem;
      'shared.hero': SharedHero;
      'shared.images': SharedImages;
      'shared.info-item': SharedInfoItem;
      'shared.info-item-list': SharedInfoItemList;
      'shared.label-item-list': SharedLabelItemList;
      'shared.media-card-item': SharedMediaCardItem;
      'shared.nav-link': SharedNavLink;
      'shared.nav-link-child': SharedNavLinkChild;
      'shared.option-item': SharedOptionItem;
      'shared.option-item-list': SharedOptionItemList;
      'shared.seo-meta': SharedSeoMeta;
      'shared.social-media-item': SharedSocialMediaItem;
      'shared.spec-row-item': SharedSpecRowItem;
      'shared.tag-item': SharedTagItem;
      'shared.text-item': SharedTextItem;
      'shared.text-item-list': SharedTextItemList;
      'shared.trust-bar-item': SharedTrustBarItem;
    }
  }
}
