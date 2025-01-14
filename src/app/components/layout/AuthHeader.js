import React from 'react';
import { c } from 'ttag';
import { useModals, AuthenticatedBugModal } from 'react-components';

const AuthHeader = () => {
    const { createModal } = useModals();
    const handleClick = () => createModal(<AuthenticatedBugModal />);
    return (
        <header className="header flex flex-nowrap reset4print">
            <a href="/" className="logo-container nodecoration flex-item-centered-vert">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="logo"
                    aria-labelledby="logo__title plan"
                    width="148"
                    height="36"
                >
                    <g>
                        <path d="M28.51 15.9h-2.26v6.456h-2.466V4.776h4.673c4.337 0 6.985 1.735 6.985 5.435 0 4.107-2.882 5.69-6.933 5.69zm.207-9.236H26.25v7.323h2.467c2.363 0 4.103-.74 4.103-3.75 0-2.629-1.714-3.573-4.103-3.573zm9.633 15.692V8.909h2.077l.286 2.577c.779-1.888 1.973-2.883 3.583-2.883.441 0 .935.051 1.35.153l-.441 2.297a4.363 4.363 0 0 0-1.195-.154c-1.713 0-2.804 1.71-3.271 3.573v7.884zm14.307-14.06c3.894 0 6.075 2.757 6.075 7.018 0 4.158-2.233 7.042-6.101 7.042-3.895 0-6.102-2.756-6.102-7.017 0-4.159 2.233-7.042 6.128-7.042zm0 1.889c-2.285 0-3.558 1.633-3.558 5.154 0 3.496 1.247 5.129 3.532 5.129s3.53-1.633 3.53-5.154c0-3.496-1.245-5.129-3.504-5.129zm16.565 11.252c-.83.612-1.921.919-3.064.919-2.544 0-3.687-1.582-3.687-3.904v-8.063h-2.18V8.603h2.18V5.567l2.39-.28v3.316h3.452l-.285 1.786H64.86v8.037c0 1.353.442 1.99 1.636 1.99.597 0 1.142-.178 1.817-.586zm7.167-13.14c3.894 0 6.075 2.756 6.075 7.017 0 4.158-2.233 7.042-6.101 7.042-3.895 0-6.102-2.756-6.102-7.017 0-4.159 2.233-7.042 6.128-7.042zm0 1.888c-2.285 0-3.558 1.633-3.558 5.154 0 3.496 1.247 5.129 3.532 5.129 2.284 0 3.53-1.633 3.53-5.154 0-3.496-1.246-5.129-3.504-5.129zm12.021 12.17h-2.388V8.91h2.05l.183 1.837c1.116-1.377 2.752-2.143 4.362-2.143 2.648 0 3.713 1.48 3.713 3.98v9.773h-2.39v-9.62c0-1.607-.57-2.296-2.128-2.296-1.48 0-2.675 1.123-3.402 2.169zm26.562 0l-.779-9.006a93.98 93.98 0 0 1-.285-5.843h-.104l-3.999 12.987h-2.363l-4.154-12.987h-.104c0 .587-.052 3.572-.234 5.843l-.7 9.007h-2.337l1.48-17.58h3.323l3.92 12.834h.105l3.79-12.834h3.35l1.48 17.58zm15.293-3.342c0 1.072.312 1.455 1.013 1.71l-.571 1.633c-1.22-.153-2.103-.69-2.519-1.888-.96 1.275-2.415 1.888-4.076 1.888-2.753 0-4.44-1.659-4.44-4.16 0-2.78 2.285-4.337 6.439-4.337h1.766v-1.046c0-1.888-.961-2.602-2.96-2.602-.91 0-2.181.204-3.584.688l-.623-1.735c1.688-.612 3.22-.867 4.57-.867 3.48 0 4.985 1.658 4.985 4.388zm-2.388-.28v-3.317h-1.636c-2.934 0-3.947 1.046-3.947 2.679 0 1.658.753 2.5 2.467 2.5 1.298 0 2.337-.689 3.116-1.862zm7.945-12.886c-.987 0-1.662-.688-1.662-1.607 0-.893.675-1.582 1.662-1.582.986 0 1.687.689 1.687 1.582 0 .919-.7 1.607-1.687 1.607zm-1.195 16.509V8.909h2.389v13.447zm11.399-.46c-.598.281-1.247.46-1.948.46-1.636 0-2.804-.919-2.804-3.215V3.194l2.389-.28v16.43c0 .766.26 1.073.857 1.073.337 0 .623-.051.882-.154z" />
                        <path d="M8.263-.121S1.413-.343 0 7.125v5.086s.058.545 1.616 1.65c1.558 1.106 5.59 4.219 6.647 4.219 1.056 0 5.089-3.113 6.646-4.22 1.558-1.104 1.617-1.65 1.617-1.65V7.126C15.113-.343 8.263-.121 8.263-.121zm4.69 10.019h-9.38V7.125c.951-3.708 4.69-3.76 4.69-3.76s3.738.052 4.69 3.76z" />
                        <path d="M8.263 19.225s-1.062-.102-1.893-.67C5.54 17.99 0 14.1 0 14.1v7.7s.047.896 1.05.896h14.425c1.004 0 1.05-.895 1.05-.895v-7.7s-5.539 3.89-6.37 4.456c-.83.567-1.892.67-1.892.67z" />
                    </g>
                    <title id="logo__title">ProtonMail</title>
                    <text textAnchor="end" className="plan uppercase bold" x="147" y="36" id="plan" focusable="false">
                        Plus
                    </text>
                </svg>
            </a>
            <div className="searchbox-container relative flex-item-centered-vert">
                <label htmlFor="global_search">
                    <span className="sr-only">{c('Placeholder').t`Search`}</span>
                    <input
                        type="search"
                        id="global_search"
                        placeholder={c('Placeholder').t`Search`}
                        className="pm-field w100 searchbox-field "
                    />
                </label>
            </div>
            <div className="topnav-container flex-item-centered-vert flex-item-fluid">
                <ul className="topnav-list unstyled mt0 mb0 ml1 flex flex-nowrap">
                    <li className="mr1">
                        <a
                            href="https://mail.protonmail.com/"
                            className="topnav-link inline-flex flex-nowrap nodecoration rounded"
                            aria-current="true"
                        >
                            <svg
                                viewBox="0 0 16 16"
                                className="icon-16p topnav-icon mr0-5 flex-item-centered-vert fill-white"
                                role="img"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <use xlinkHref="#shape-email" />
                            </svg>
                            Mailbox
                        </a>
                    </li>
                    <li className="mr1">
                        <a href="/settings/" className="topnav-link inline-flex flex-nowrap nodecoration rounded">
                            <svg
                                viewBox="0 0 16 16"
                                className="icon-16p topnav-icon mr0-5 flex-item-centered-vert fill-white"
                                role="img"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <use xlinkHref="#shape-settings-master" />
                            </svg>
                            Settings
                        </a>
                    </li>
                    <li className="mr1">
                        <button
                            onClick={handleClick}
                            className="topnav-link inline-flex flex-nowrap nodecoration rounded"
                        >
                            <svg
                                viewBox="0 0 16 16"
                                className="icon-16p topnav-icon mr0-5 flex-item-centered-vert fill-white"
                                role="img"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <use xlinkHref="#shape-support1" />
                            </svg>
                            Support
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default AuthHeader;
