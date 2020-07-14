import * as React from 'react';

interface IPageContentWrapperProps { }

interface IPageContentWrapperState { }

export default class PageContentWrapper extends React.PureComponent<IPageContentWrapperProps, IPageContentWrapperState> {
    public render() {
        return (
            <main className={'py-4'} style={{ minHeight: '700px' }}>
                {this.props.children}
            </main>
        );
    }
}
