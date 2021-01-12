import React from 'react';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

// Import Component
import Hero from '../components/Hero';

// Import Hero Data
import heroData from '../pages/api/cms';


describe('Hero', () => {

    afterEach(cleanup);

    it("should render without crashing", () => {
      render(<Hero heroData={heroData} />);
    });

  it('should match Snapshot', () => {
    const component = render(<Hero heroData={heroData} />);

    expect(component).toMatchSnapshot();
  });
});