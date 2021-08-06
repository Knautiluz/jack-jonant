import PropTypes from 'prop-types'
import { GitHub, ExpandMore, PlayArrow, BarChart } from '@material-ui/icons'
import apiImage from '../web-api.svg'
import redisImage from '../graphql/redis.svg'
import nodejsImage from '../graphql/nodejs.svg'
import graphqlImage from '../graphql/graphql.svg'
import herokuImage from '../java/heroku.svg'
import jestImage from '../graphql/jest.svg'
import prometheusImage from '../graphql/prometheus.svg'
import { Grid, Accordion, AccordionSummary, AccordionDetails, Button, Box, Paper } from '@material-ui/core'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import translate from '../functions/dictionary'
function NodeJsBox(props) {

  return (
    <>
      <Grid container direction='row' justify='center' alignItems='center' spacing={3}>
        <Grid container item md={12}>
          <Box mx="auto">
            <Card>
              <CardContent>
                <CardMedia
                  style={{ maxWidth: 'calc(10px + 10vmin)' }}
                  component="img"
                  alt="Web API Image"
                  image={apiImage}
                  title="Web API"
                />
                <Typography color="secondary" variant="h6" component="h2">
                  Characters API - GRAPHQL
                </Typography>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography color="secondary">
                      {translate('node-card-summary', props.lang)}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="secondary" component="div">
                      <Typography style={{ fontSize: '0.9em' }} color="secondary" variant="caption" component="div">
                        {translate('node-card-details-paragraph-1', props.lang)}
                        <ul style={{ marginLeft: '2vw' }}>
                          <li>
                            {translate('node-card-details-paragraph-2', props.lang)}
                          </li>
                          <li>
                            {translate('node-card-details-paragraph-3', props.lang)}
                          </li>
                          <li>
                            {translate('node-card-details-paragraph-4', props.lang)}
                          </li>
                          <li>
                            {translate('node-card-details-paragraph-5', props.lang)}
                          </li>
                        </ul>
                        {translate('node-card-details-paragraph-6', props.lang)}
                        <br></br>
                        <br></br>
                        <strong>*Disclaimer</strong>
                        <br></br>
                        {translate('node-card-details-paragraph-7', props.lang)}
                      </Typography>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Paper elevation={3} style={{ padding: '20px', maxHeight: '100vh', overflow: 'auto' }}>
                  <Typography align="center" color="secondary" variant="h6" component="p">
                    {translate('node-card-tech-summary', props.lang)}
                  </Typography>
                  <Grid container direction='row' justify='center' alignItems='center' spacing={0}>
                    <Grid container item xs={2} sm={2} md={2} lg={2}>
                      <img alt="NodeJS" width="33vw" height="33vh" src={nodejsImage} />
                    </Grid>
                    <Grid container item xs={2} sm={2} md={2} lg={2}>
                      <img alt="Graphql" width="33vw" height="33vh" src={graphqlImage} />
                    </Grid>
                    <Grid container item xs={2} sm={2} md={2} lg={2}>
                      <img alt="Jest" width="33vw" height="33vh" src={jestImage} />
                    </Grid>
                    <Grid container item xs={2} sm={2} md={2} lg={2}>
                      <img alt="Prometheus" width="33vw" height="33vh" src={prometheusImage} />
                    </Grid>
                    <Grid container item xs={2} sm={2} md={2} lg={2}>
                      <img alt="Heroku" width="33vw" height="33vh" src={redisImage} />
                    </Grid>
                    <Grid container item xs={2} sm={2} md={2} lg={2}>
                      <img alt="ES6" width="33vw" height="33vh" src={herokuImage} />
                    </Grid>
                  </Grid>
                </Paper>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography color="secondary">
                      {translate('node-card-tech-header', props.lang)}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="secondary" component="div">
                      <ul style={{ marginLeft: '2vw' }} >
                        <li>
                          <Typography style={{ fontSize: '0.9em' }} component="p" variant="caption">
                            {translate('node-card-tech-paragraph-1', props.lang)}
                          </Typography>
                        </li>
                        <li>
                          <Typography style={{ fontSize: '0.9em' }} component="p" variant="caption">
                            {translate('node-card-tech-paragraph-2', props.lang)}
                            <br></br>
                            {translate('node-card-tech-paragraph-3', props.lang)}
                            <br></br>
                          </Typography>
                        </li>
                        <li>
                          <Typography style={{ fontSize: '0.9em' }} component="p" variant="caption">
                            {translate('node-card-tech-paragraph-4', props.lang)}
                          </Typography>
                        </li>
                        <li>
                          <Typography style={{ fontSize: '0.9em' }} component="p" variant="caption">
                            {translate('node-card-tech-paragraph-5', props.lang)}
                          </Typography>
                        </li>
                        <li>
                          <Typography style={{ fontSize: '0.9em' }} component="p" variant="caption">
                            {translate('node-card-tech-paragraph-6', props.lang)}
                          </Typography>
                        </li>
                        <li>
                          <Typography style={{ fontSize: '0.9em' }} component="p" variant="caption">
                            {translate('node-card-tech-paragraph-7', props.lang)}
                          </Typography>
                        </li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Box mt="2vh" textAlign='center'>
                  <Button onClick={() => window.open('https://github.com/Knautiluz/marvel-characters-api-gql', '_blank').focus()} variant="contained" color="primary" size="large" startIcon={<GitHub />}>
                    <Typography variant="caption" color="secondary" component="p">
                      Characters API - GRAPHQL
                    </Typography>
                  </Button>
                </Box>
                <Box mt="1vh" textAlign='center'>
                  <Button onClick={() => window.open('https://knautiluz-characters-gql.herokuapp.com/graphql', '_blank').focus()} variant="contained" color="primary" size="large" startIcon={<PlayArrow />}>
                    <Typography variant="caption" color="secondary" component="p">
                      Playground
                    </Typography>
                  </Button>
                </Box>
                <Box mt="1vh" textAlign='center'>
                  <Button onClick={() => window.open('https://knautiluz-characters-gql.herokuapp.com/metrics', '_blank').focus()} variant="contained" color="primary" size="large" startIcon={<BarChart />}>
                    <Typography variant="caption" color="secondary" component="p">
                      Metrics
                    </Typography>
                  </Button>
                </Box>
                <Box mt="0.5vh" textAlign='center'>
                  <img alt="CI GRAPHQL" src="https://github.com/Knautiluz/marvel-characters-api-gql/actions/workflows/continuous-integration.yml/badge.svg?branch=master"></img>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

NodeJsBox.propTypes = {
  lang: PropTypes.string.isRequired,
}

export default NodeJsBox