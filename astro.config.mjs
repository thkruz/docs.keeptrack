import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: '',
    logo: {
      src: './src/assets/textLogoSm.png'
    },
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    customCss: [
      './src/styles/global.css',
    ],
    sidebar: [{
      label: 'Introduction to KeepTrack',
      items: [{
        label: 'Overview',
        slug: 'intro/overview'
      },
      // {
      //   label: 'Certification Process',
      //   slug: 'intro/certification-overview'
      // }
      ]
    }, {
      label: 'Level 1 - Basic Tutorials',
      items: [
      {
        label: 'Mouse Controls',
        slug: 'intro/mouse-controls'
      }, {
        label: 'Interface Walkthrough',
        slug: 'intro/interface-walkthrough'
      }, {
        label: 'Keyboard Shortcuts',
        slug: 'basic-tut/keyboard-shortcuts'
      }, {
        label: 'Types of Satellites',
        slug: 'basic-tut/satellites'
      },{
        label: 'Intro to Orbital Mechanics',
        slug: 'basic-tut/orbital-mechanics'
      }, {
        label: 'Select a Satellite',
        slug: 'basic-tut/find-a-satellite'
      }, {
        label: 'Types of Sensors',
        slug: 'basic-tut/sensors'
      }, {
        label: 'Select a Sensor',
        slug: 'basic-tut/find-a-sensor'
      }, {
        label: 'Calculating Look Angles',
        slug: 'basic-tut/calculating-look-angles'
      }, {
        label: 'Make a Polar Plot',
        slug: 'basic-tut/make-polar-plot'
      },
      // {
      //   label: 'Building a Mission Plan',
      //   slug: 'basic-tut/build-a-mission-plan'
      // }
      ]
    },
    // {
    //   label: 'Level 2 - Advanced Tutorials',
    //   items: [{
    //     label: 'Customizing KeepTrack',
    //     slug: 'advanced-tut/customizing-keeptrack'
    //   }, {
    //     label: 'Using KeepTrack Offline',
    //     slug: 'advanced-tut/using-keeptrack-offline'
    //   }]
    // }, {
    //   label: 'Level 3 - Case Studies',
    //   items: [{
    //     label: 'Customizing KeepTrack',
    //     slug: 'advanced-tut/customizing-keeptrack'
    //   }, {
    //     label: 'Using KeepTrack Offline',
    //     slug: 'advanced-tut/using-keeptrack-offline'
    //   }]
    // },
    {
      label: 'Core Plugins',
      autogenerate: {
        directory: 'core-plugins'
      }
    }, {
      label: 'Addon Plugins',
      autogenerate: {
        directory: 'plugins'
      }
    }, {
      label: 'Developer Plugins',
      autogenerate: {
        directory: 'dev-plugins'
      }
    }, {
      label: 'Contributing',
      items: [{
        label: 'Contributing',
        slug: 'contributing/contributing'
      }, {
        label: 'Code of Conduct',
        slug: 'contributing/code-of-conduct'
      }, {
        label: 'License',
        slug: 'contributing/license'
      },{
        label: 'Developing Plugins',
        slug: 'dev/dev-plugins'
      }, {
        label: 'Developing Sensors',
        slug: 'dev/dev-sensors'
      }, {
        label: 'Developing Filters',
        slug: 'dev/dev-filters'
      }, {
        label: 'Developing Data Sources',
        slug: 'dev/dev-data-sources'
      }]
    }]
  }), mdx()]
});