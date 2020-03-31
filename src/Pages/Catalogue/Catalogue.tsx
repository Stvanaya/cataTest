import React from 'react';

/* CONTAINERS */
import CatalogueContainer from 'Modules/Catalogue/Catalogue';
import CategoriesContainer from 'Modules/Catalogue/Categories';

/* COMPONENTS */
import Banner from 'Components/Banner/Banner';

/* DS */
import Grid from 'DS/Layout/Grid';
import Column from 'DS/Layout/Column';

interface CatalogueProps {}

const Catalogue: React.FC<CatalogueProps> = () => {
  return (
    <>
      <Grid>
        <Column margin="0 0 30px 0">
          <Banner />
        </Column>
        <Column xs={12} sm={12} lg={3} xlg={3} margin="0 0 30px 0">
          <CategoriesContainer />
        </Column>
        <Column xs={12} sm={12} lg={9} xlg={9} margin="0 0 30px 0">
          <CatalogueContainer />
        </Column>
      </Grid>
    </>
  );
};

export default Catalogue;
