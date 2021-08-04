import { Accordion, AccordionSummary, AccordionDetails, Button, Box } from '@material-ui/core'
import { ExpandMore, LinkedIn } from '@material-ui/icons'
import { Grid } from '@material-ui/core'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import devImage from '../dev.svg'
import translate from '../functions/dictionary'

function DevBox(props) {

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
                  image={devImage}
                  title="Web API"
                />
                <Typography color="secondary" variant="h6" component="h2">
                  Developer Jack Jonant
                </Typography>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography color="secondary">
                      {translate('dev-card-summary', props.lang)}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="secondary" component="div">
                      <Typography style={{ fontSize: '0.9em' }} color="secondary" variant="caption" component="p">
                        {translate('dev-card-details-paragraph-1', props.lang)}
                        <br></br>
                        <br></br>
                        {translate('dev-card-details-paragraph-2', props.lang)}
                        <br></br>
                        {translate('dev-card-details-paragraph-3', props.lang)}
                        <br></br>
                        {translate('dev-card-details-paragraph-4', props.lang)}
                        <br></br>
                        <br></br>
                        {translate('dev-card-details-paragraph-5', props.lang)}
                        <br></br>
                        {translate('dev-card-details-paragraph-6', props.lang)}
                        <br></br>
                        <br></br>
                        {translate('dev-card-details-paragraph-7', props.lang)}
                        <br></br>
                        <br></br>
                        {translate('dev-card-details-paragraph-8', props.lang)}
                        <br></br>
                        {translate('dev-card-details-paragraph-9', props.lang)}
                        <br></br>
                        {translate('dev-card-details-paragraph-10', props.lang)}
                      </Typography>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Box mt="2vh" textAlign='center'>
                  <Button onClick={() => window.open('https://www.linkedin.com/in/jackson-jones-antunes/', '_blank').focus()} variant="contained" color="primary" size="large" startIcon={<LinkedIn />}>
                    <Typography variant="caption" color="secondary" component="p">
                      Jack Jonant ;)
                    </Typography>
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>)
}
DevBox.propTypes = {
  lang: PropTypes.string.isRequired,
}

export default DevBox