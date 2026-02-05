import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
  condition: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}