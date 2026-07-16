import type { Schema, Struct } from '@strapi/strapi';

export interface NavigationFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_navigation_footer_columns';
  info: {
    displayName: 'footer-column';
  };
  attributes: {
    links: Schema.Attribute.Component<'navigation.nav-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationNavItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_items';
  info: {
    displayName: 'nav-item';
  };
  attributes: {
    children: Schema.Attribute.Component<'navigation.nav-item-child', true>;
    externalUrl: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    linkedPage: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    linkedProduct: Schema.Attribute.Relation<
      'oneToOne',
      'api::product.product'
    >;
    linkType: Schema.Attribute.Enumeration<
      ['page', 'product', 'article', 'external', 'none']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page'>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface NavigationNavItemChild extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_item_children';
  info: {
    displayName: 'nav-item-child';
  };
  attributes: {
    externalUrl: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    linkedPage: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    linkedProduct: Schema.Attribute.Relation<
      'oneToOne',
      'api::product.product'
    >;
    linkType: Schema.Attribute.Enumeration<
      ['page', 'product', 'article', 'external', 'none']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'page'>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface PageSectionArticleGrid extends Struct.ComponentSchema {
  collectionName: 'components_page_section_article_grids';
  info: {
    displayName: 'section-article-grid';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PageSectionCta extends Struct.ComponentSchema {
  collectionName: 'components_page_section_ctas';
  info: {
    displayName: 'section-cta';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta-block', false>;
  };
}

export interface PageSectionFaqList extends Struct.ComponentSchema {
  collectionName: 'components_page_section_faq_lists';
  info: {
    displayName: 'section-faq-list';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    title: Schema.Attribute.String;
  };
}

export interface PageSectionFeatures extends Struct.ComponentSchema {
  collectionName: 'components_page_section_features';
  info: {
    displayName: 'section-features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface PageSectionHero extends Struct.ComponentSchema {
  collectionName: 'components_page_section_heroes';
  info: {
    displayName: 'section-hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'shared.cta-block', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageSectionImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_page_section_image_galleries';
  info: {
    displayName: 'section-image-gallery';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface PageSectionProductGrid extends Struct.ComponentSchema {
  collectionName: 'components_page_section_product_grids';
  info: {
    displayName: 'section-product-grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    title: Schema.Attribute.String;
  };
}

export interface PageSectionProjectGrid extends Struct.ComponentSchema {
  collectionName: 'components_page_section_project_grids';
  info: {
    displayName: 'section-project-grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    title: Schema.Attribute.String;
  };
}

export interface PageSectionRichtext extends Struct.ComponentSchema {
  collectionName: 'components_page_section_richtexts';
  info: {
    displayName: 'section-richtext';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface PageSectionStats extends Struct.ComponentSchema {
  collectionName: 'components_page_section_stats_s';
  info: {
    displayName: 'section-stats ';
  };
  attributes: {
    stats: Schema.Attribute.Component<'shared.stat-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface PageSectionTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_page_section_testimonials';
  info: {
    displayName: 'section-testimonials';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<'shared.testimonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface PageSectionVideoEmbed extends Struct.ComponentSchema {
  collectionName: 'components_page_section_video_embeds';
  info: {
    displayName: 'section-video-embed';
  };
  attributes: {
    title: Schema.Attribute.String;
    videos: Schema.Attribute.Relation<'oneToMany', 'api::video.video'>;
  };
}

export interface ProductCommonMistake extends Struct.ComponentSchema {
  collectionName: 'components_product_common_mistakes';
  info: {
    displayName: 'common-mistake';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductComparisonRow extends Struct.ComponentSchema {
  collectionName: 'components_product_comparison_rows';
  info: {
    displayName: 'comparison-row';
  };
  attributes: {
    competitor: Schema.Attribute.String;
    feature: Schema.Attribute.String & Schema.Attribute.Required;
    highlight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ourProduct: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductPairing extends Struct.ComponentSchema {
  collectionName: 'components_product_pairings';
  info: {
    displayName: 'pairing';
  };
  attributes: {
    accessories: Schema.Attribute.Relation<
      'oneToMany',
      'api::accessory.accessory'
    >;
    category: Schema.Attribute.String & Schema.Attribute.Required;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    reason: Schema.Attribute.Text;
  };
}

export interface SeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_seo_metas';
  info: {
    displayName: 'meta';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    focusKeyword: Schema.Attribute.String;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ogImage: Schema.Attribute.Media<'images'>;
    secondaryKeywords: Schema.Attribute.JSON;
    seoDescription: Schema.Attribute.Text;
    seoTitle: Schema.Attribute.String;
  };
}

export interface SharedAdvantage extends Struct.ComponentSchema {
  collectionName: 'components_shared_advantages';
  info: {
    displayName: 'advantage';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedAiContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_ai_contents';
  info: {
    displayName: 'ai-content';
  };
  attributes: {
    aiSummary: Schema.Attribute.Text;
    buyingGuide: Schema.Attribute.RichText;
    comparison: Schema.Attribute.RichText;
    faqSchema: Schema.Attribute.JSON;
  };
}

export interface SharedBadge extends Struct.ComponentSchema {
  collectionName: 'components_shared_badges';
  info: {
    displayName: 'badge';
  };
  attributes: {
    color: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    displayName: 'contact-info';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    factoryAddress: Schema.Attribute.Text;
    phone: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

export interface SharedCtaBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_blocks';
  info: {
    displayName: 'cta-block';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.link', false>;
    secondaryButton: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedEngineeringNote extends Struct.ComponentSchema {
  collectionName: 'components_shared_engineering_notes';
  info: {
    displayName: 'engineering-note';
  };
  attributes: {
    author: Schema.Attribute.String;
    category: Schema.Attribute.Enumeration<
      ['installation', 'wiring', 'dimming', 'safety', 'general']
    >;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'social-link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      [
        'facebook',
        'linkedin',
        'youtube',
        'instagram',
        'twitter',
        'tiktok',
        'wechat',
        'weibo',
      ]
    >;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSpecification extends Struct.ComponentSchema {
  collectionName: 'components_shared_specifications';
  info: {
    displayName: 'specification';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    note: Schema.Attribute.String;
    sortOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    unit: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    displayName: 'stat-item';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    avatar: Schema.Attribute.Media<'images'>;
    company: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

export interface SharedTheme extends Struct.ComponentSchema {
  collectionName: 'components_shared_themes';
  info: {
    displayName: 'theme';
  };
  attributes: {
    colorsAccent: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#2563eb'>;
    colorsDark: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#121222'>;
    colorsPrimary: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#ff6600'>;
    colorsSecondary: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#1a1a2e'>;
    fontsBody: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Inter'>;
    fontsHeading: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Inter'>;
    fontsMono: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'JetBrains Mono'>;
    layoutBorderRadius: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'4px'>;
    layoutHeaderHeight: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<72>;
    layoutMaxWidth: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1280>;
    mode: Schema.Attribute.Enumeration<['light', 'dark', 'auto']> &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navigation.footer-column': NavigationFooterColumn;
      'navigation.nav-item': NavigationNavItem;
      'navigation.nav-item-child': NavigationNavItemChild;
      'page.section-article-grid': PageSectionArticleGrid;
      'page.section-cta': PageSectionCta;
      'page.section-faq-list': PageSectionFaqList;
      'page.section-features': PageSectionFeatures;
      'page.section-hero': PageSectionHero;
      'page.section-image-gallery': PageSectionImageGallery;
      'page.section-product-grid': PageSectionProductGrid;
      'page.section-project-grid': PageSectionProjectGrid;
      'page.section-richtext': PageSectionRichtext;
      'page.section-stats': PageSectionStats;
      'page.section-testimonials': PageSectionTestimonials;
      'page.section-video-embed': PageSectionVideoEmbed;
      'product.common-mistake': ProductCommonMistake;
      'product.comparison-row': ProductComparisonRow;
      'product.pairing': ProductPairing;
      'seo.meta': SeoMeta;
      'shared.advantage': SharedAdvantage;
      'shared.ai-content': SharedAiContent;
      'shared.badge': SharedBadge;
      'shared.contact-info': SharedContactInfo;
      'shared.cta-block': SharedCtaBlock;
      'shared.engineering-note': SharedEngineeringNote;
      'shared.feature': SharedFeature;
      'shared.link': SharedLink;
      'shared.social-link': SharedSocialLink;
      'shared.specification': SharedSpecification;
      'shared.stat-item': SharedStatItem;
      'shared.testimonial': SharedTestimonial;
      'shared.theme': SharedTheme;
    }
  }
}
