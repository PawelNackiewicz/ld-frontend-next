import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  it('render whole component', () => {
    const { getByTestId } = render(<Footer />);
    const renderedFooter = getByTestId('footer');
    expect(renderedFooter).toBeInTheDocument();
    expect(renderedFooter).toHaveClass('footer-container');
    expect(renderedFooter).not.toHaveClass('class');
    expect(renderedFooter).toContainHTML('p');
  });
});
