import React from 'react';
import { useNavigate, } from 'react-router-dom';
import { Container, Button, Divider } from '@mui/material';

import Grid from '@mui/material/Grid';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PrimaryHeader from '../../components/headers/primaryHeader';
import FeatureCreateForm from './featureCreateForm';

export const FeatureCreatePage = () => {
    const navigate = useNavigate()

    return (
        <Container style={{paddingTop: 20}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PrimaryHeader title={'Feature Creation View'} />
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="text"
                        startIcon={<ArrowBackIosNewIcon />}
                        onClick={() => navigate(-1)}>
                        Back
                    </Button>
                </Grid>
                <FeatureCreateForm />
            </Grid>
        </Container>
    )
}

export default FeatureCreatePage