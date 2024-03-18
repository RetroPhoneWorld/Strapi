import type { Schema, Attribute } from '@strapi/strapi';

export interface BecomePartnerBenefitsItem extends Schema.Component {
  collectionName: 'components_become_partner_benefits_items';
  info: {
    displayName: 'BenefitsItem';
    icon: 'bulletList';
  };
  attributes: {
    icon: Attribute.Media;
    text: Attribute.Text;
  };
}

export interface BecomePartnerBenefits extends Schema.Component {
  collectionName: 'components_become_partner_benefits';
  info: {
    displayName: 'Benefits';
    icon: 'star';
  };
  attributes: {
    title: Attribute.String;
    benefits: Attribute.Component<'become-partner.benefits-item', true>;
  };
}

export interface BecomePartnerContact extends Schema.Component {
  collectionName: 'components_become_partner_contacts';
  info: {
    displayName: 'Contact';
    icon: 'phone';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface BecomePartnerHero extends Schema.Component {
  collectionName: 'components_become_partner_heroes';
  info: {
    displayName: 'Hero';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface ComponentsAbout extends Schema.Component {
  collectionName: 'components_components_abouts';
  info: {
    displayName: 'About';
    icon: 'medium';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    lead: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
    card: Attribute.Component<'components.pop-up-card'>;
  };
}

export interface ComponentsBlackSection extends Schema.Component {
  collectionName: 'components_components_black_sections';
  info: {
    displayName: 'BlackSection-Guinnes';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Title1: Attribute.String;
    Title2: Attribute.String;
    Description: Attribute.RichText;
    Image: Attribute.Media;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface ComponentsCardList extends Schema.Component {
  collectionName: 'components_components_card_lists';
  info: {
    displayName: 'CardList';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    cards: Attribute.Component<'components.card', true>;
  };
}

export interface ComponentsCard extends Schema.Component {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
    icon: 'layout';
  };
  attributes: {
    title: Attribute.String;
    Icon: Attribute.Media;
    description: Attribute.RichText;
    link: Attribute.String;
    headerColor: Attribute.Relation<
      'components.card',
      'oneToOne',
      'api::color.color'
    >;
  };
}

export interface ComponentsCounter extends Schema.Component {
  collectionName: 'components_components_counters';
  info: {
    displayName: 'Counter';
    icon: 'hashtag';
  };
  attributes: {
    count: Attribute.String;
    label: Attribute.String;
    unit: Attribute.String;
  };
}

export interface ComponentsCta extends Schema.Component {
  collectionName: 'components_components_ctas';
  info: {
    displayName: 'CTA';
    icon: 'question';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    buttonList: Attribute.Component<'components.button', true>;
  };
}

export interface ComponentsFooter extends Schema.Component {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'Footer';
    icon: 'stack';
  };
  attributes: {
    title: Attribute.Text;
    FirstButton: Attribute.Component<'components.button'>;
    SecondButton: Attribute.Component<'components.button'>;
  };
}

export interface ComponentsHeaderList extends Schema.Component {
  collectionName: 'components_components_header_lists';
  info: {
    displayName: 'HeaderList';
    icon: 'bulletList';
  };
  attributes: {
    Header: Attribute.Component<'components.header', true>;
  };
}

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    icon: 'bold';
    description: '';
  };
  attributes: {
    lead: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
    buttonName: Attribute.String;
    buttonLink: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ComponentsImageBlock extends Schema.Component {
  collectionName: 'components_components_image_blocks';
  info: {
    displayName: 'ImageBlock';
    icon: 'landscape';
  };
  attributes: {
    FirstImage: Attribute.Media;
    SecondImage: Attribute.Media;
    ThirdImage: Attribute.Media;
  };
}

export interface ComponentsListing extends Schema.Component {
  collectionName: 'components_components_listings';
  info: {
    displayName: 'Listing';
    icon: 'bulletList';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ComponentsPartner extends Schema.Component {
  collectionName: 'components_components_partners';
  info: {
    displayName: 'Partner (slider)';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
  };
}

export interface ComponentsPopUpCard extends Schema.Component {
  collectionName: 'components_components_pop_up_cards';
  info: {
    displayName: 'PopUpCard';
    icon: 'calendar';
  };
  attributes: {
    name: Attribute.String;
    positon: Attribute.String;
    description: Attribute.String;
  };
}

export interface ComponentsTestimonialSection extends Schema.Component {
  collectionName: 'components_components_testimonial_sections';
  info: {
    displayName: 'TestimonialSection';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    TestimonialList: Attribute.Component<'components.testimonial', true>;
  };
}

export interface ComponentsTestimonial extends Schema.Component {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'server';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ComponentsValueBlock extends Schema.Component {
  collectionName: 'components_components_value_blocks';
  info: {
    displayName: 'ValueBlock';
    icon: 'landscape';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentsValue extends Schema.Component {
  collectionName: 'components_components_values';
  info: {
    displayName: 'Value';
    icon: 'filter';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
    imageBlock: Attribute.Component<'components.image-block'>;
    firstCounter: Attribute.Component<'components.counter'>;
    secondCounter: Attribute.Component<'components.counter'>;
  };
}

export interface ContactUsClientInfo extends Schema.Component {
  collectionName: 'components_contact_us_client_infos';
  info: {
    displayName: 'ClientInfo';
    icon: 'information';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media;
    subtitle: Attribute.String;
    link: Attribute.String;
    linkName: Attribute.String;
    linkType: Attribute.Enumeration<['tel', 'email', 'map', 'default']> &
      Attribute.DefaultTo<'default'>;
  };
}

export interface ContactUsContactUs extends Schema.Component {
  collectionName: 'components_contact_us_contactuses';
  info: {
    displayName: 'ContactUs';
    icon: 'phone';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    clientInfo: Attribute.Component<'contact-us.client-info', true>;
  };
}

export interface EquilibriumAbout extends Schema.Component {
  collectionName: 'components_equilibrium_abouts';
  info: {
    displayName: 'About';
    icon: 'information';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface EquilibriumCta extends Schema.Component {
  collectionName: 'components_equilibrium_ctas';
  info: {
    displayName: 'Cta';
    icon: 'phone';
  };
  attributes: {
    titleNormal: Attribute.String;
    titleHighlited: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    link: Attribute.String;
  };
}

export interface EquilibriumHero extends Schema.Component {
  collectionName: 'components_equilibrium_heroes';
  info: {
    displayName: 'Hero';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    banner: Attribute.Media;
  };
}

export interface EquilibriumMission extends Schema.Component {
  collectionName: 'components_equilibrium_missions';
  info: {
    displayName: 'Mission';
    icon: 'paperPlane';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
    titleRedirect: Attribute.String;
    buttonNameRedirect: Attribute.String;
    buttonLinkRedirect: Attribute.String;
  };
}

export interface EquilibriumServices extends Schema.Component {
  collectionName: 'components_equilibrium_services';
  info: {
    displayName: 'Services';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    Services: Attribute.Component<'become-partner.benefits-item', true>;
  };
}

export interface EquilibriumValue extends Schema.Component {
  collectionName: 'components_equilibrium_values';
  info: {
    displayName: 'Value';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
    imageBlock: Attribute.Component<'components.image-block'>;
  };
}

export interface EventsHeader extends Schema.Component {
  collectionName: 'components_events_headers';
  info: {
    displayName: 'Header';
    icon: 'bold';
    description: '';
  };
  attributes: {
    lead: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
    buttonName: Attribute.String;
    buttonLink: Attribute.String;
    image: Attribute.Media;
    showEvents: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    Links: Attribute.Component<'menu.link', true>;
    title: Attribute.String;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'Link';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface MenuMenuButton extends Schema.Component {
  collectionName: 'components_menu_menu_buttons';
  info: {
    displayName: 'MenuButton';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface PartnersContact extends Schema.Component {
  collectionName: 'components_story_contacts';
  info: {
    displayName: 'Contact';
    icon: 'information';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    formText: Attribute.String;
  };
}

export interface PartnersFeaturedPartnerButton extends Schema.Component {
  collectionName: 'components_partners_featured_partner_buttons';
  info: {
    displayName: 'FeaturedPartnerButton';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    ShowPartners: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface PartnersFeaturedPartnerCard extends Schema.Component {
  collectionName: 'components_partners_featured_partner_cards';
  info: {
    displayName: 'FeaturedPartnerCard';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    ShowPartners: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface PartnersHeader extends Schema.Component {
  collectionName: 'components_partners_headers';
  info: {
    displayName: 'Header';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface PartnersOtherPartners extends Schema.Component {
  collectionName: 'components_partners_other_partners';
  info: {
    displayName: 'OtherPartners';
    icon: 'plus';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    ShowPartners: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface PartnersPremiumPartner extends Schema.Component {
  collectionName: 'components_partners_premium_partners';
  info: {
    displayName: 'PremiumPartner';
    icon: 'star';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    partnerName: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface StoryAbout extends Schema.Component {
  collectionName: 'components_story_abouts';
  info: {
    displayName: 'About';
    icon: 'search';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface StoryCountdown extends Schema.Component {
  collectionName: 'components_story_countdowns';
  info: {
    displayName: 'Countdown';
    icon: 'clock';
  };
  attributes: {
    title1: Attribute.String;
    title2: Attribute.String;
    description: Attribute.RichText;
    endDate: Attribute.Date;
  };
}

export interface StoryHeader extends Schema.Component {
  collectionName: 'components_story_headers';
  info: {
    displayName: 'Header';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface StoryValues extends Schema.Component {
  collectionName: 'components_story_values';
  info: {
    displayName: 'Values';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    list: Attribute.Component<'components.listing', true>;
    ValueBlock: Attribute.Component<'components.value-block', true> &
      Attribute.SetMinMax<{
        max: 3;
      }>;
  };
}

export interface WordRecordDescription extends Schema.Component {
  collectionName: 'components_word_record_descriptions';
  info: {
    displayName: 'Description';
    icon: 'filter';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface WordRecordHeader extends Schema.Component {
  collectionName: 'components_word_record_headers';
  info: {
    displayName: 'Header';
    icon: 'bold';
  };
  attributes: {
    lead: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface WordRecordMission extends Schema.Component {
  collectionName: 'components_word_record_missions';
  info: {
    displayName: 'Mission';
    icon: 'expand';
    description: '';
  };
  attributes: {
    lead: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface WordRecordVision extends Schema.Component {
  collectionName: 'components_word_record_visions';
  info: {
    displayName: 'Vision';
    icon: 'eye';
  };
  attributes: {
    lead: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'become-partner.benefits-item': BecomePartnerBenefitsItem;
      'become-partner.benefits': BecomePartnerBenefits;
      'become-partner.contact': BecomePartnerContact;
      'become-partner.hero': BecomePartnerHero;
      'components.about': ComponentsAbout;
      'components.black-section': ComponentsBlackSection;
      'components.button': ComponentsButton;
      'components.card-list': ComponentsCardList;
      'components.card': ComponentsCard;
      'components.counter': ComponentsCounter;
      'components.cta': ComponentsCta;
      'components.footer': ComponentsFooter;
      'components.header-list': ComponentsHeaderList;
      'components.header': ComponentsHeader;
      'components.image-block': ComponentsImageBlock;
      'components.listing': ComponentsListing;
      'components.partner': ComponentsPartner;
      'components.pop-up-card': ComponentsPopUpCard;
      'components.testimonial-section': ComponentsTestimonialSection;
      'components.testimonial': ComponentsTestimonial;
      'components.value-block': ComponentsValueBlock;
      'components.value': ComponentsValue;
      'contact-us.client-info': ContactUsClientInfo;
      'contact-us.contact-us': ContactUsContactUs;
      'equilibrium.about': EquilibriumAbout;
      'equilibrium.cta': EquilibriumCta;
      'equilibrium.hero': EquilibriumHero;
      'equilibrium.mission': EquilibriumMission;
      'equilibrium.services': EquilibriumServices;
      'equilibrium.value': EquilibriumValue;
      'events.header': EventsHeader;
      'menu.dropdown': MenuDropdown;
      'menu.link': MenuLink;
      'menu.menu-button': MenuMenuButton;
      'menu.menu-link': MenuMenuLink;
      'partners.contact': PartnersContact;
      'partners.featured-partner-button': PartnersFeaturedPartnerButton;
      'partners.featured-partner-card': PartnersFeaturedPartnerCard;
      'partners.header': PartnersHeader;
      'partners.other-partners': PartnersOtherPartners;
      'partners.premium-partner': PartnersPremiumPartner;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'story.about': StoryAbout;
      'story.countdown': StoryCountdown;
      'story.header': StoryHeader;
      'story.values': StoryValues;
      'word-record.description': WordRecordDescription;
      'word-record.header': WordRecordHeader;
      'word-record.mission': WordRecordMission;
      'word-record.vision': WordRecordVision;
    }
  }
}
