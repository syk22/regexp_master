// import React, { useState } from 'react';
import styles from './Components.module.css';
import { RegExpPage } from '../features/regexp/RegExpPage';
import { RegExpReferences } from '../features/regexp/RegExpReferences';
// import { RegexpReferences } from '../features/regexp/RegexpReferences';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

export function Contents() {
    return (
        <div>
            <div id='main' className={styles.contents}>
                {/* <div id='main_contents_area'><RegExp /></div>
                <div id='ref_contents_area'><RegExpReferences /></div> */}

                <Grid container spacing={1}>
                    <Grid item xs={7}>
                        {/* <Item>box1</Item> */}
                        <div id='main_contents_area'><RegExpPage /></div>
                    </Grid>
                    <Grid item xs={5}>
                        {/* <Item>box2</Item> */}
                        <div id='ref_contents_area'><RegExpReferences /></div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
  