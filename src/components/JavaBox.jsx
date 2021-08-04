import { Grid } from '@material-ui/core'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { Accordion, AccordionSummary, AccordionDetails, Button, Box, Paper } from '@material-ui/core'
import { GitHub, ExpandMore } from '@material-ui/icons'
import PropTypes from 'prop-types'
import apiImage from '../web-api.svg'
import dockerImage from '../java/docker.svg'
import archUnitImage from '../java/archunit.svg'
import gradleImage from '../java/gradle.svg'
import springImage from '../java/spring.svg'
import javaImage from '../java/java.svg'
import herokuImage from '../java/heroku.svg'
import translate from '../functions/dictionary'

function JavaBox(props) {

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
                  Characters API - REST
                </Typography>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography color="secondary">
                      {translate('java-card-papper-header', props.lang)}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="secondary" component="div">
                      <Typography style={{ fontSize: '0.9em' }} color="secondary" variant="caption" component="div">
                        {translate('java-card-paragraph-1', props.lang)}
                        <br></br>
                        {translate('java-card-paragraph-2', props.lang)}
                        <br></br>
                        {translate('java-card-paragraph-3', props.lang)}
                        <br></br>
                        {translate('java-card-paragraph-4', props.lang)}
                        <ul style={{ marginLeft: '2vw' }}>
                          <li>
                            {translate('java-card-paragraph-5', props.lang)}
                          </li>
                          <li>
                            {translate('java-card-paragraph-6', props.lang)}
                          </li>
                          <li>
                            {translate('java-card-paragraph-7', props.lang)}
                          </li>
                          <li>
                            {translate('java-card-paragraph-8', props.lang)}
                          </li>
                          <li>
                            {translate('java-card-paragraph-9', props.lang)}
                          </li>
                          <li>
                            {translate('java-card-paragraph-10', props.lang)}
                          </li>
                        </ul>
                      </Typography>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Paper elevation={3} style={{ padding: '20px', maxHeight: '100vh', overflow: 'auto' }}>
                  <Typography align="center" color="secondary" variant="h6" component="p">
                    {translate('node-card-tech-summary', props.lang)}
                  </Typography>
                  <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid container item xs={2} sm={2} md={2} lg={2}>
                      <img alt="Java 8" width="33vw" height="33vh" src={javaImage} />
                    </Grid>
                    <Grid container item xs={2} sm={2} md={2} lg={2}>
                      <img alt="SpringBoot" width="33vw" height="33vh" src={springImage} />
                    </Grid>
                    <Grid container item xs={2} sm={2} md={2} lg={2}>
                      <img alt="Arch Unit" width="33vw" height="33vh" src={archUnitImage} />
                    </Grid>
                    <Grid container item xs={2} sm={2} md={2} lg={2}>
                      <img alt="Gradle" width="33vw" height="33vh" src={gradleImage} />
                    </Grid>
                    <Grid container item xs={2} sm={2} md={2} lg={2}>
                      <img alt="Docker" width="33vw" height="33vh" src={dockerImage} />
                    </Grid>
                    <Grid container item xs={2} sm={2} md={2} lg={2}>
                      <img alt="Heroku" width="33vw" height="33vh" src={herokuImage} />
                    </Grid>
                  </Grid>
                </Paper>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography color="secondary">
                      {translate('java-card-tech-summary', props.lang)}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="secondary" component="div">
                      <ul style={{ marginLeft: '2vw' }}>
                        <li>
                          <Typography style={{ fontSize: '0.9em' }} component="p" variant="caption">
                            {translate('java-card-tech-paragraph-1', props.lang)}
                          </Typography>
                        </li>
                        <li>
                          <Typography style={{ fontSize: '0.9em' }} component="p" variant="caption">
                            {translate('java-card-tech-paragraph-2', props.lang)}
                            <br></br>
                            {translate('java-card-tech-paragraph-3', props.lang)}
                          </Typography>
                        </li>
                        <li>
                          <Typography style={{ fontSize: '0.9em' }} component="p" variant="caption">
                            {translate('java-card-tech-paragraph-4', props.lang)}
                          </Typography>
                        </li>
                        <li>
                          <Typography style={{ fontSize: '0.9em' }} component="p" variant="caption">
                            {translate('java-card-tech-paragraph-5', props.lang)}
                            <br></br>
                            {translate('java-card-tech-paragraph-6', props.lang)}
                          </Typography>
                        </li>
                        <li>
                          <Typography style={{ fontSize: '0.9em' }} component="p" variant="caption">
                            {translate('java-card-tech-paragraph-7', props.lang)}
                          </Typography>
                        </li>
                        <li>
                          <Typography style={{ fontSize: '0.9em' }} component="p" variant="caption">
                            {translate('java-card-tech-paragraph-8', props.lang)}
                          </Typography>
                        </li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Box mt="2vh" textAlign='center'>
                  <Button onClick={() => window.open('https://github.com/Knautiluz/marvel-characters-api', '_blank').focus()} variant="contained" color="primary" size="large" startIcon={<GitHub />}>
                    <Typography variant="caption" color="secondary" component="p">
                      Characters API - REST
                    </Typography>
                  </Button>
                </Box>
                <Box mt="0.5vh" textAlign='center'>
                  <img alt="CI GRADLE JAVA" src="https://github.com/Knautiluz/marvel-characters-api/actions/workflows/gradle.yml/badge.svg?branch=master"></img>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
JavaBox.propTypes = {
  lang: PropTypes.string.isRequired,
}
export default JavaBox