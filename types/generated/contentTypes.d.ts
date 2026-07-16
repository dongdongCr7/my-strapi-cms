import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    adminPermissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::permission'
    >;
    adminUserOwner: Schema.Attribute.Relation<'manyToOne', 'admin::user'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    kind: Schema.Attribute.Enumeration<['content-api', 'admin']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'content-api'>;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminAuditLog extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_audit_logs';
  info: {
    displayName: 'Audit Log';
    pluralName: 'audit-logs';
    singularName: 'audit-log';
  };
  options: {
    draftAndPublish: false;
    timestamps: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.DateTime & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::audit-log'> &
      Schema.Attribute.Private;
    payload: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Relation<'oneToOne', 'admin::user'>;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    apiToken: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    apiTokens: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAccessoryAccessory extends Struct.CollectionTypeSchema {
  collectionName: 'accessories';
  info: {
    displayName: 'accessory';
    pluralName: 'accessories';
    singularName: 'accessory';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    accessories: Schema.Attribute.Relation<
      'manyToMany',
      'api::accessory.accessory'
    >;
    category: Schema.Attribute.Enumeration<
      [
        'Controller',
        'Power Supply',
        'Connector',
        'Profile',
        'Mounting Clip',
        'End Cap',
        'Other',
      ]
    > &
      Schema.Attribute.Required;
    certifications: Schema.Attribute.Relation<
      'manyToMany',
      'api::certification.certification'
    >;
    compatibleProducts: Schema.Attribute.Relation<
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    downloads: Schema.Attribute.Relation<
      'manyToMany',
      'api::download.download'
    >;
    image: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::accessory.accessory'
    > &
      Schema.Attribute.Private;
    longDescription: Schema.Attribute.RichText;
    model: Schema.Attribute.String & Schema.Attribute.Unique;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    relatedAccessories: Schema.Attribute.Relation<
      'manyToMany',
      'api::accessory.accessory'
    >;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    shortDescription: Schema.Attribute.Text;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    specifications: Schema.Attribute.Component<'shared.specification', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiApplicationApplication extends Struct.CollectionTypeSchema {
  collectionName: 'applications';
  info: {
    displayName: 'application';
    pluralName: 'applications';
    singularName: 'application';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articles: Schema.Attribute.Relation<'manyToMany', 'api::article.article'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.Relation<'manyToMany', 'api::faq.faq'>;
    gallery: Schema.Attribute.Media<'images', true>;
    heroImage: Schema.Attribute.Media<'images'>;
    icon: Schema.Attribute.Media<'images'>;
    industries: Schema.Attribute.Relation<
      'manyToMany',
      'api::industry.industry'
    >;
    lightingEffects: Schema.Attribute.Relation<
      'manyToMany',
      'api::lighting-effect.lighting-effect'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::application.application'
    > &
      Schema.Attribute.Private;
    longDescription: Schema.Attribute.RichText;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    projects: Schema.Attribute.Relation<'manyToMany', 'api::project.project'>;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    shortDescription: Schema.Attribute.Text;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    technologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArticleArticle extends Struct.CollectionTypeSchema {
  collectionName: 'articles';
  info: {
    displayName: 'article';
    pluralName: 'articles';
    singularName: 'article';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aiContent: Schema.Attribute.Component<'shared.ai-content', false>;
    articles: Schema.Attribute.Relation<'manyToMany', 'api::article.article'>;
    author: Schema.Attribute.String;
    category: Schema.Attribute.Enumeration<
      [
        'Buying Guide',
        'Technology',
        'Comparison',
        'Installation',
        'Case Study',
        'News',
      ]
    > &
      Schema.Attribute.DefaultTo<'Technology'>;
    content: Schema.Attribute.RichText;
    coverImage: Schema.Attribute.Media<'images'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    excerpt: Schema.Attribute.Text;
    faqs: Schema.Attribute.Relation<'manyToMany', 'api::faq.faq'>;
    industries: Schema.Attribute.Relation<
      'manyToMany',
      'api::industry.industry'
    >;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    readTime: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    relatedApplications: Schema.Attribute.Relation<
      'manyToMany',
      'api::application.application'
    >;
    relatedArticles: Schema.Attribute.Relation<
      'manyToMany',
      'api::article.article'
    >;
    relatedProducts: Schema.Attribute.Relation<
      'manyToMany',
      'api::product.product'
    >;
    relatedProjects: Schema.Attribute.Relation<
      'manyToMany',
      'api::project.project'
    >;
    relatedTechnologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    tags: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videos: Schema.Attribute.Relation<'manyToMany', 'api::video.video'>;
  };
}

export interface ApiBrandBrand extends Struct.CollectionTypeSchema {
  collectionName: 'brands';
  info: {
    displayName: 'brand';
    pluralName: 'brands';
    singularName: 'brand';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    designPhilosophy: Schema.Attribute.RichText;
    engineeringNotes: Schema.Attribute.RichText;
    heroImage: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::brand.brand'> &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images'>;
    longDescription: Schema.Attribute.RichText;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    productFamilies: Schema.Attribute.Relation<
      'manyToMany',
      'api::product-family.product-family'
    >;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    shortDescription: Schema.Attribute.Text;
    shortName: Schema.Attribute.String;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    tagline: Schema.Attribute.String;
    typicalProjects: Schema.Attribute.Relation<
      'manyToMany',
      'api::project.project'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCertificationCertification
  extends Struct.CollectionTypeSchema {
  collectionName: 'certifications';
  info: {
    displayName: 'certification';
    pluralName: 'certifications';
    singularName: 'certification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    certificateFile: Schema.Attribute.Media<'files'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::certification.certification'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    relatedAccessories: Schema.Attribute.Relation<
      'manyToMany',
      'api::accessory.accessory'
    >;
    relatedProducts: Schema.Attribute.Relation<
      'manyToMany',
      'api::product.product'
    >;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    validUntil: Schema.Attribute.Date;
  };
}

export interface ApiDownloadDownload extends Struct.CollectionTypeSchema {
  collectionName: 'downloads';
  info: {
    displayName: 'download';
    pluralName: 'downloads';
    singularName: 'download';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        'Datasheet',
        'IES File',
        'Installation Guide',
        'Catalog',
        'Warranty',
        'Other',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    downloadCount: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    file: Schema.Attribute.Media<'files'>;
    fileSize: Schema.Attribute.String;
    fileType: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::download.download'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    relatedAccessories: Schema.Attribute.Relation<
      'manyToMany',
      'api::accessory.accessory'
    >;
    relatedProducts: Schema.Attribute.Relation<
      'manyToMany',
      'api::product.product'
    >;
    relatedSeries: Schema.Attribute.Relation<
      'manyToMany',
      'api::product-sery.product-sery'
    >;
    relatedTechnologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    thumbnail: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFaqFaq extends Struct.CollectionTypeSchema {
  collectionName: 'faqs';
  info: {
    displayName: 'faq';
    pluralName: 'faqs';
    singularName: 'faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    category: Schema.Attribute.Enumeration<
      [
        'Product',
        'Installation',
        'Technical',
        'Ordering',
        'Warranty',
        'General',
      ]
    > &
      Schema.Attribute.DefaultTo<'General'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    industries: Schema.Attribute.Relation<
      'manyToMany',
      'api::industry.industry'
    >;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    relatedApplications: Schema.Attribute.Relation<
      'manyToMany',
      'api::application.application'
    >;
    relatedArticles: Schema.Attribute.Relation<
      'manyToMany',
      'api::article.article'
    >;
    relatedProducts: Schema.Attribute.Relation<
      'manyToMany',
      'api::product.product'
    >;
    relatedTechnologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'question'> & Schema.Attribute.Required;
    sortOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFormSubmissionFormSubmission
  extends Struct.CollectionTypeSchema {
  collectionName: 'form_submissions';
  info: {
    displayName: 'form-submission';
    pluralName: 'form-submissions';
    singularName: 'form-submission';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    company: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.String & Schema.Attribute.Required;
    formType: Schema.Attribute.Enumeration<
      ['contact', 'sample-request', 'quote', 'general']
    > &
      Schema.Attribute.Required;
    ipAddress: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::form-submission.form-submission'
    > &
      Schema.Attribute.Private;
    message: Schema.Attribute.RichText;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    site: Schema.Attribute.Relation<'manyToOne', 'api::site.site'>;
    sourcePage: Schema.Attribute.String;
    statu: Schema.Attribute.Enumeration<
      ['new', 'read', 'replied', 'closed', 'spam']
    > &
      Schema.Attribute.DefaultTo<'new'>;
    subject: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userAgent: Schema.Attribute.String;
  };
}

export interface ApiIndustryIndustry extends Struct.CollectionTypeSchema {
  collectionName: 'industries';
  info: {
    displayName: 'industry';
    pluralName: 'industries';
    singularName: 'industry';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    applications: Schema.Attribute.Relation<
      'manyToMany',
      'api::application.application'
    >;
    articles: Schema.Attribute.Relation<'manyToMany', 'api::article.article'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.Relation<'manyToMany', 'api::faq.faq'>;
    heroImage: Schema.Attribute.Media<'images'>;
    icon: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::industry.industry'
    > &
      Schema.Attribute.Private;
    longDescription: Schema.Attribute.RichText;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    projects: Schema.Attribute.Relation<'manyToMany', 'api::project.project'>;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    shortDescription: Schema.Attribute.Text;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLightingEffectLightingEffect
  extends Struct.CollectionTypeSchema {
  collectionName: 'lighting_effects';
  info: {
    displayName: 'lighting-effect';
    pluralName: 'lighting-effects';
    singularName: 'lighting-effect';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    applications: Schema.Attribute.Relation<
      'manyToMany',
      'api::application.application'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::lighting-effect.lighting-effect'
    > &
      Schema.Attribute.Private;
    longDescription: Schema.Attribute.RichText;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewImage: Schema.Attribute.Media<'images'>;
    previewVideo: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    shortDescription: Schema.Attribute.Text;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    sortOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    technologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNavigationNavigation extends Struct.CollectionTypeSchema {
  collectionName: 'navigations';
  info: {
    displayName: 'navigation';
    pluralName: 'navigations';
    singularName: 'navigation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    footerColumns: Schema.Attribute.Component<'navigation.footer-column', true>;
    items: Schema.Attribute.Component<'navigation.nav-item', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::navigation.navigation'
    > &
      Schema.Attribute.Private;
    menuType: Schema.Attribute.Enumeration<
      ['main', 'footer', 'sidebar', 'mobile']
    > &
      Schema.Attribute.DefaultTo<'main'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    site: Schema.Attribute.Relation<'manyToOne', 'api::site.site'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPagePage extends Struct.CollectionTypeSchema {
  collectionName: 'pages';
  info: {
    displayName: 'page';
    pluralName: 'pages';
    singularName: 'page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'page.section-video-embed',
        'page.section-testimonials',
        'page.section-stats',
        'page.section-richtext',
        'page.section-project-grid',
        'page.section-product-grid',
        'page.section-image-gallery',
        'page.section-hero',
        'page.section-features',
        'page.section-faq-list',
        'page.section-cta',
        'page.section-article-grid',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::page.page'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    site: Schema.Attribute.Relation<'manyToOne', 'api::site.site'>;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    template: Schema.Attribute.Enumeration<
      ['home', 'about', 'contact', 'custom', 'landing']
    > &
      Schema.Attribute.DefaultTo<'custom'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProductFamilyProductFamily
  extends Struct.CollectionTypeSchema {
  collectionName: 'product_families';
  info: {
    displayName: 'product-family';
    pluralName: 'product-families';
    singularName: 'product-family';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    brands: Schema.Attribute.Relation<'manyToMany', 'api::brand.brand'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heroImage: Schema.Attribute.Media<'images'>;
    icon: Schema.Attribute.Media<'images'>;
    keyFeatures: Schema.Attribute.Component<'shared.feature', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::product-family.product-family'
    > &
      Schema.Attribute.Private;
    longDescription: Schema.Attribute.RichText;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    productSeries: Schema.Attribute.Relation<
      'manyToMany',
      'api::product-sery.product-sery'
    >;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    shortDescription: Schema.Attribute.Text;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'name'>;
    sortOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    tagline: Schema.Attribute.String;
    technologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProductSeryProductSery extends Struct.CollectionTypeSchema {
  collectionName: 'product_series';
  info: {
    displayName: 'product-sery';
    pluralName: 'product-series';
    singularName: 'product-sery';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    downloads: Schema.Attribute.Relation<
      'manyToMany',
      'api::download.download'
    >;
    heroImage: Schema.Attribute.Media<'images'>;
    keyFeatures: Schema.Attribute.Component<'shared.feature', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::product-sery.product-sery'
    > &
      Schema.Attribute.Private;
    longDescription: Schema.Attribute.RichText;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    productFamilies: Schema.Attribute.Relation<
      'manyToMany',
      'api::product-family.product-family'
    >;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    shortDescription: Schema.Attribute.Text;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    specifications: Schema.Attribute.Component<'shared.specification', true>;
    tagline: Schema.Attribute.String;
    technologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProductProduct extends Struct.CollectionTypeSchema {
  collectionName: 'products';
  info: {
    displayName: 'product';
    pluralName: 'products';
    singularName: 'product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    accessories: Schema.Attribute.Relation<
      'manyToMany',
      'api::accessory.accessory'
    >;
    advantages: Schema.Attribute.Component<'shared.advantage', true>;
    aiContent: Schema.Attribute.Component<'shared.ai-content', false>;
    applications: Schema.Attribute.Relation<
      'manyToMany',
      'api::application.application'
    >;
    articles: Schema.Attribute.Relation<'manyToMany', 'api::article.article'>;
    badges: Schema.Attribute.Component<'shared.badge', true>;
    brands: Schema.Attribute.Relation<'manyToMany', 'api::brand.brand'>;
    certifications: Schema.Attribute.Relation<
      'manyToMany',
      'api::certification.certification'
    >;
    commonMistakes: Schema.Attribute.Component<'product.common-mistake', true>;
    comparisonTable: Schema.Attribute.Component<'product.comparison-row', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    designPhilosophy: Schema.Attribute.RichText;
    downloads: Schema.Attribute.Relation<
      'manyToMany',
      'api::download.download'
    >;
    engineeringNotes: Schema.Attribute.Component<
      'shared.engineering-note',
      true
    >;
    faqs: Schema.Attribute.Relation<'manyToMany', 'api::faq.faq'>;
    form_submissions: Schema.Attribute.Relation<
      'manyToMany',
      'api::form-submission.form-submission'
    >;
    gallery: Schema.Attribute.Media<'images', true>;
    heroImage: Schema.Attribute.Media<'images'>;
    industries: Schema.Attribute.Relation<
      'manyToMany',
      'api::industry.industry'
    >;
    installationImages: Schema.Attribute.Media<'images', true>;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isNew: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    keyFeatures: Schema.Attribute.Component<'shared.feature', true>;
    lightingEffects: Schema.Attribute.Relation<
      'manyToMany',
      'api::lighting-effect.lighting-effect'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::product.product'
    > &
      Schema.Attribute.Private;
    longDescription: Schema.Attribute.RichText;
    model: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    productFamilies: Schema.Attribute.Relation<
      'manyToMany',
      'api::product-family.product-family'
    >;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    productSeries: Schema.Attribute.Relation<
      'manyToMany',
      'api::product-sery.product-sery'
    >;
    projects: Schema.Attribute.Relation<'manyToMany', 'api::project.project'>;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    recommendedPairing: Schema.Attribute.Component<'product.pairing', true>;
    relatedProducts: Schema.Attribute.Relation<
      'manyToMany',
      'api::product.product'
    >;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    shortDescription: Schema.Attribute.Text;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    sku: Schema.Attribute.String & Schema.Attribute.Unique;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    sortOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    specifications: Schema.Attribute.Component<'shared.specification', true>;
    tags: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    technologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videos: Schema.Attribute.Relation<'manyToMany', 'api::video.video'>;
  };
}

export interface ApiProjectProject extends Struct.CollectionTypeSchema {
  collectionName: 'projects';
  info: {
    displayName: 'project';
    pluralName: 'projects';
    singularName: 'project';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    applications: Schema.Attribute.Relation<
      'manyToMany',
      'api::application.application'
    >;
    architect: Schema.Attribute.String;
    articles: Schema.Attribute.Relation<'manyToMany', 'api::article.article'>;
    brands: Schema.Attribute.Relation<'manyToMany', 'api::brand.brand'>;
    challenge: Schema.Attribute.RichText;
    city: Schema.Attribute.String;
    client: Schema.Attribute.String;
    completionDate: Schema.Attribute.Date;
    country: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    gallery: Schema.Attribute.Media<'images', true>;
    heroImage: Schema.Attribute.Media<'images'>;
    industries: Schema.Attribute.Relation<
      'manyToMany',
      'api::industry.industry'
    >;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::project.project'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.String;
    longDescription: Schema.Attribute.RichText;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    results: Schema.Attribute.RichText;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    shortDescription: Schema.Attribute.Text;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    solution: Schema.Attribute.RichText;
    tags: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videos: Schema.Attribute.Relation<'manyToMany', 'api::video.video'>;
  };
}

export interface ApiRedirectRedirect extends Struct.CollectionTypeSchema {
  collectionName: 'redirects';
  info: {
    displayName: 'redirect';
    pluralName: 'redirects';
    singularName: 'redirect';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hitCount: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::redirect.redirect'
    > &
      Schema.Attribute.Private;
    note: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    redirectType: Schema.Attribute.Enumeration<['a301', 'a302', 'a410']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'a301'>;
    site: Schema.Attribute.Relation<'manyToOne', 'api::site.site'>;
    sourceUrl: Schema.Attribute.String & Schema.Attribute.Required;
    targetUrl: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSiteSite extends Struct.CollectionTypeSchema {
  collectionName: 'sites';
  info: {
    displayName: 'site';
    pluralName: 'sites';
    singularName: 'site';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    accessories: Schema.Attribute.Relation<
      'manyToMany',
      'api::accessory.accessory'
    >;
    analytics: Schema.Attribute.JSON;
    applications: Schema.Attribute.Relation<
      'manyToMany',
      'api::application.application'
    >;
    articles: Schema.Attribute.Relation<'manyToMany', 'api::article.article'>;
    availableLanguages: Schema.Attribute.JSON;
    brands: Schema.Attribute.Relation<'manyToMany', 'api::brand.brand'>;
    certifications: Schema.Attribute.Relation<
      'manyToMany',
      'api::certification.certification'
    >;
    contactInfo: Schema.Attribute.Component<'shared.contact-info', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    defaultLocale: Schema.Attribute.Enumeration<
      ['en', 'zh', 'de', 'fr', 'es']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'en'>;
    domain: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    downloads: Schema.Attribute.Relation<
      'manyToMany',
      'api::download.download'
    >;
    faqs: Schema.Attribute.Relation<'manyToMany', 'api::faq.faq'>;
    favicon: Schema.Attribute.Media<'images'>;
    footerText: Schema.Attribute.String;
    formSubmissions: Schema.Attribute.Relation<
      'oneToMany',
      'api::form-submission.form-submission'
    >;
    industries: Schema.Attribute.Relation<
      'manyToMany',
      'api::industry.industry'
    >;
    isPrimary: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    lightingEffects: Schema.Attribute.Relation<
      'manyToMany',
      'api::lighting-effect.lighting-effect'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::site.site'> &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    navigations: Schema.Attribute.Relation<
      'oneToMany',
      'api::navigation.navigation'
    >;
    pages: Schema.Attribute.Relation<'oneToMany', 'api::page.page'>;
    productFamilies: Schema.Attribute.Relation<
      'manyToMany',
      'api::product-family.product-family'
    >;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    productSeries: Schema.Attribute.Relation<
      'manyToMany',
      'api::product-sery.product-sery'
    >;
    projects: Schema.Attribute.Relation<'manyToMany', 'api::project.project'>;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    redirects: Schema.Attribute.Relation<'oneToMany', 'api::redirect.redirect'>;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    socialLinks: Schema.Attribute.Component<'shared.social-link', true>;
    statu: Schema.Attribute.Enumeration<['draft', 'active', 'archived']> &
      Schema.Attribute.DefaultTo<'draft'>;
    tags: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    technologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
    theme: Schema.Attribute.Component<'shared.theme', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videos: Schema.Attribute.Relation<'manyToMany', 'api::video.video'>;
  };
}

export interface ApiTagTag extends Struct.CollectionTypeSchema {
  collectionName: 'tags';
  info: {
    displayName: 'tag';
    pluralName: 'tags';
    singularName: 'tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#ff6600'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::tag.tag'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    relatedArticles: Schema.Attribute.Relation<
      'manyToMany',
      'api::article.article'
    >;
    relatedProducts: Schema.Attribute.Relation<
      'manyToMany',
      'api::product.product'
    >;
    relatedProjects: Schema.Attribute.Relation<
      'manyToMany',
      'api::project.project'
    >;
    relatedTechnologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
    scope: Schema.Attribute.Enumeration<['global', 'site-specific']> &
      Schema.Attribute.DefaultTo<'global'>;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    tagType: Schema.Attribute.Enumeration<
      ['product', 'article', 'technology', 'project', 'general']
    > &
      Schema.Attribute.DefaultTo<'general'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTechnologyTechnology extends Struct.CollectionTypeSchema {
  collectionName: 'technologies';
  info: {
    displayName: 'technology';
    pluralName: 'technologies';
    singularName: 'technology';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    advantages: Schema.Attribute.Component<'shared.advantage', true>;
    aiContent: Schema.Attribute.Component<'shared.ai-content', false>;
    applications: Schema.Attribute.Relation<
      'manyToMany',
      'api::application.application'
    >;
    comparisonTable: Schema.Attribute.Component<'product.comparison-row', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    downloads: Schema.Attribute.Relation<
      'manyToMany',
      'api::download.download'
    >;
    heroImage: Schema.Attribute.Media<'images'>;
    howItWorks: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images'>;
    lightingEffects: Schema.Attribute.Relation<
      'manyToMany',
      'api::lighting-effect.lighting-effect'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::technology.technology'
    > &
      Schema.Attribute.Private;
    longDescription: Schema.Attribute.RichText;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    productFamilies: Schema.Attribute.Relation<
      'manyToMany',
      'api::product-family.product-family'
    >;
    productSeries: Schema.Attribute.Relation<
      'manyToMany',
      'api::product-sery.product-sery'
    >;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    relatedArticles: Schema.Attribute.Relation<
      'manyToMany',
      'api::article.article'
    >;
    relatedFaqs: Schema.Attribute.Relation<'manyToMany', 'api::faq.faq'>;
    relatedProducts: Schema.Attribute.Relation<
      'manyToMany',
      'api::product.product'
    >;
    relatedTaqs: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    shortDescription: Schema.Attribute.Text;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videos: Schema.Attribute.Relation<'manyToMany', 'api::video.video'>;
  };
}

export interface ApiVideoVideo extends Struct.CollectionTypeSchema {
  collectionName: 'videos';
  info: {
    displayName: 'video';
    pluralName: 'videos';
    singularName: 'video';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::video.video'> &
      Schema.Attribute.Private;
    platform: Schema.Attribute.Enumeration<
      ['YouTube', 'Vimeo', 'Bilibili', 'Local']
    > &
      Schema.Attribute.DefaultTo<'YouTube'>;
    publishedAt: Schema.Attribute.DateTime;
    publishTime: Schema.Attribute.DateTime;
    relatedArticles: Schema.Attribute.Relation<
      'manyToMany',
      'api::article.article'
    >;
    relatedProducts: Schema.Attribute.Relation<
      'manyToMany',
      'api::product.product'
    >;
    relatedProjects: Schema.Attribute.Relation<
      'manyToMany',
      'api::project.project'
    >;
    relatedTechnologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
    seo: Schema.Attribute.Component<'seo.meta', false>;
    sites: Schema.Attribute.Relation<'manyToMany', 'api::site.site'>;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    thumbnail: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoId: Schema.Attribute.String;
    videoType: Schema.Attribute.Enumeration<
      [
        'Product Demo',
        'Installation Guide',
        'Project Showcase',
        'Technology Explainer',
      ]
    > &
      Schema.Attribute.DefaultTo<'Product Demo'>;
    videoUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    focalPoint: Schema.Attribute.JSON;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::audit-log': AdminAuditLog;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::accessory.accessory': ApiAccessoryAccessory;
      'api::application.application': ApiApplicationApplication;
      'api::article.article': ApiArticleArticle;
      'api::brand.brand': ApiBrandBrand;
      'api::certification.certification': ApiCertificationCertification;
      'api::download.download': ApiDownloadDownload;
      'api::faq.faq': ApiFaqFaq;
      'api::form-submission.form-submission': ApiFormSubmissionFormSubmission;
      'api::industry.industry': ApiIndustryIndustry;
      'api::lighting-effect.lighting-effect': ApiLightingEffectLightingEffect;
      'api::navigation.navigation': ApiNavigationNavigation;
      'api::page.page': ApiPagePage;
      'api::product-family.product-family': ApiProductFamilyProductFamily;
      'api::product-sery.product-sery': ApiProductSeryProductSery;
      'api::product.product': ApiProductProduct;
      'api::project.project': ApiProjectProject;
      'api::redirect.redirect': ApiRedirectRedirect;
      'api::site.site': ApiSiteSite;
      'api::tag.tag': ApiTagTag;
      'api::technology.technology': ApiTechnologyTechnology;
      'api::video.video': ApiVideoVideo;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
