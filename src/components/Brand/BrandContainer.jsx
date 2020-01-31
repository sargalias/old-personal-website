import React from 'react';
import useLogoImageData from 'dataQueries/useLogoImageData';
import BrandView from './BrandView';

const BrandContainer = () => <BrandView imageData={useLogoImageData()} />;

export default BrandContainer;
