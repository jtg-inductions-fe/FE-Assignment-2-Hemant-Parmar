import DribbleIconURL from '@assets/images/icons/DribbleIcon.svg';
import FacebookIconURL from '@assets/images/icons/FacebookIcon.svg';
import GithubIconURL from '@assets/images/icons/GithubIcon.svg';
import TwitterIconURL from '@assets/images/icons/TwitterIcon.svg';

export const footerConfig = {
    description: '© 2021 Themesberg, LLC. All rights reserved.',
    links: [
        {
            url: 'https://facebook.com/',
            iconURL: FacebookIconURL,
            ariaLabel: 'Follow us on Facebook',
        },
        {
            url: 'https://twitter.com/',
            iconURL: TwitterIconURL,
            ariaLabel: 'Follow us on Twitter',
        },

        {
            url: 'https://github.com/',
            iconURL: GithubIconURL,
            ariaLabel: 'Follow us on Github',
        },
        {
            url: 'https://dribbble.com/',
            iconURL: DribbleIconURL,
            ariaLabel: 'Follow us on Dribble',
        },
    ],
};
