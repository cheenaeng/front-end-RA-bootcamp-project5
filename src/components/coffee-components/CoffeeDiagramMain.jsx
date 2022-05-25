/* eslint-disable max-len */
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { motion, AnimatePresence } from 'framer-motion';
import AppContext from '../../functions.jsx';

function CoffeeDiagramMain() {
  const { appState, dispatch, keywords } = useContext(AppContext);
  const coffeeLayerProportion = appState.coffee;
  const waterLayerProportion = 100 - appState.coffee;

  const { UPDATE_DIAGRAM_COFFEE } = keywords;

  const coffeeWrapperVariant = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        duration: 0.5,
      },
    },
  };

  const layerVariant = {
    hidden: {
      x: '-10',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      delay: 0.2,
      staggeredChildren: 0.2,
      transition: {
        delay: 1,
      },
    },
  };

  const handleCoffeeLayer = (e) => {
    if (e.target.value >= 60 && e.target.value <= 100) {
      dispatch({ type: UPDATE_DIAGRAM_COFFEE, payload: e.target.value });
    }
  };

  console.log(appState);

  return (
    <>
      <h1> Coffee</h1>

      <motion.div
        className="coffee-wrapper"
        variants={coffeeWrapperVariant}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {appState.ice
          && (
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0, transition: 0.1 }}
              className="ice-image"
            >
              {' '}
              ICE IMAGE
            </motion.div>
          )}
          { (appState.milk.evapMilk || appState.milk.condMilk)
          && (
          <motion.div
            variants={layerVariant}
            className="milk-layer"
            exit={{ opacity: 0, transition: 0.1 }}
          >
            {' '}
            milk layer
          </motion.div>
          ) }
        </AnimatePresence>
        <motion.div
          className="water-layer"
          style={{ height: `${(waterLayerProportion / 100) * 90}%` }}
          variants={layerVariant}
        >
          water
        </motion.div>
        <motion.div
          className="coffee-layer"
          style={{ height: `${(coffeeLayerProportion / 100) * 90}%` }}
          variants={layerVariant}
        >
          coffee
        </motion.div>
      </motion.div>
      <div className="table-div"> </div>
      <Box width={300}>
        <Slider aria-label="Default" valueLabelDisplay="auto" onChange={handleCoffeeLayer} value={coffeeLayerProportion} />
      </Box>
    </>
  );
}

export default CoffeeDiagramMain;