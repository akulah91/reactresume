import React, { Component } from 'react';
import foto from './images/rahmatNew.jpg';
import qh from './images/QuikHalalFull.png'
import attnd from './images/attnd.jpg'
import hrmpro from './images/hrmpro.jpeg'

import { Header, Image, Divider, Grid, Segment, Item, Progress } from 'semantic-ui-react'

class Cv extends Component {
  render() {
    return (
      <div id="printable">
        <Header as='h2' icon>
          <Image circular src={foto} className="foto" />
          <Header.Content>  Mohamad Rahmat bin Harun
      <Header.Subheader>I love to learn and create something new and something related to new trend technologies.
                          Being a system developer for almost 5 years, I developed many kind of system from backend to front end.
                          Here my cv and hope its enough for me to give the impression of how I can impress you with my works if we are about to working together.</Header.Subheader>
          </Header.Content>

        </Header>
        <Divider />
        <Header as='h3'>
          <Header.Content>
            My Works
      <Header.Subheader>Here all my project involvement since graduated</Header.Subheader>
          </Header.Content>
        </Header>
        <Item.Group className="workItem">
          <Item>
            <Item.Image size='small' src={qh} />

            <Item.Content>
              <Item.Header as='a' href="http://www.quikhalal.com" target="_blank">QuikHalal</Item.Header>
              <Item.Description>
                <p>A Halal Auditing Apps that build using apache cordova platform.</p>
                <p>My work as mobile apps developer @ Holisticslab Sdn. Bhd.</p>
                <p>iOS: <a href="https://itunes.apple.com/us/app/quikhalal/id1358613307?mt=8">https://itunes.apple.com/us/app/quikhalal/id1358613307?mt=8</a> </p>
                <p>android: <a href="https://play.google.com/store/apps/details?id=my.holisticslab.quikhalal">https://play.google.com/store/apps/details?id=my.holisticslab.quikhalal</a></p>
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image size='small' src={hrmpro} />

            <Item.Content>
              <Item.Header as='a' href="https://auroracw.com/" target="_blank">AuroraHRMPro Native Apps</Item.Header>
              <Item.Description>
                <p>A Human Resoure Management Apps that build using React Native Platform.</p>
                <p>My work as Freelancer</p>
                <p>iOS: <a href="https://itunes.apple.com/us/app/aurorahrmpro/id1435076794?ls=1&mt=8">https://itunes.apple.com/us/app/aurorahrmpro/id1435076794?ls=1&mt=8</a> </p>
                <p>android: <a href="https://play.google.com/store/apps/details?id=com.auroracw.aurorahrmpro">https://play.google.com/store/apps/details?id=com.auroracw.aurorahrmpro</a></p>
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image size='small' src={attnd} />
            <Item.Content>
              <Item.Header as='a' href="https://auroracw.com/" target="_blank">Aurora Attendance Kiosk</Item.Header>
              <Item.Description>
                <p>An Attendance qlocking kiosk build using React Native.</p>
                <p>My work as Freelancer</p>
                <p>iOS: <a href="https://itunes.apple.com/us/app/aurora-attendance-system/id1422093495?ls=1&mt=8">https://itunes.apple.com/us/app/aurora-attendance-system/id1422093495?ls=1&mt=8</a> </p>
                <p>android: <a href="https://play.google.com/store/apps/details?id=com.naxtivestudio.acwp1">https://play.google.com/store/apps/details?id=com.naxtivestudio.acwp1</a></p>
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Content>
              <Item.Header as='div' >Training Registration System</Item.Header>
              <Item.Description>
                <p>A web based training regisration system develop using React.js platform and backend support by laravel.</p>
                <p>My work as mobile apps developer @ Holisticslab Sdn. Bhd.</p>
                <p>link: <a href="http://register.holisticslab.my">http://register.holisticslab.my</a> </p>
              </Item.Description>
            </Item.Content>
          </Item>


          <Item>
            <Item.Content>
              <Item.Header as='div' >Others</Item.Header>
              <Item.Description>
                <p>I involve in many other project including inhouse software development including:</p>
                <ul>
                  <li>Node.js: Reading a spreadsheet file, filter the data and output  data to sql query format.</li>
                  <li>React Native : Developing in house system for QR code attendance scanner to records trainee attendance during training session.</li>
                  <li>React Native : Mobile end attendance clocking system for the staff in my current company.</li>
                  <li>Node.js : scrapping website and Extract base 64 picture  and compile into pdf per screen and save as the title of screen</li>
                </ul>
              </Item.Description>
            </Item.Content>
          </Item>


        </Item.Group>

        <Divider />
        <Header as='h3'>
          <Header.Content>
            Skills Proficiency
      <Header.Subheader>Here all the things I am good at</Header.Subheader>
          </Header.Content>
        </Header>

        <Grid columns='equal' className="skill">
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <Header as='h5'>React Native</Header>
                <Progress percent={90} color='green' progress />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h5'>React.js</Header>
                <Progress percent={90} color='green' progress />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h5'>Node.js</Header>
                <Progress percent={70} color='olive' progress />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h5'>Javascript</Header>
                <Progress percent={95} color='green' progress />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <Header as='h5'>AngularJs</Header>
                <Progress percent={50} color='yellow' progress />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h5'>OnsenUI</Header>
                <Progress percent={50} color='yellow' progress />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h5'>Ionic</Header>
                <Progress percent={50} color='yellow' progress />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h5'>Cordova</Header>
                <Progress percent={90} color='green' progress />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>

            <Grid.Column>
              <Segment>
                <Header as='h5'>Laravel</Header>
                <Progress percent={90} color='green' progress />
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <Header as='h5'>PHP</Header>
                <Progress percent={85} color='green' progress />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h5'>mySQL</Header>
                <Progress percent={90} color='green' progress />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h5'>MS SQL</Header>
                <Progress percent={80} color='green' progress />
              </Segment>
            </Grid.Column>
          </Grid.Row>

        </Grid>
        <Divider />
        <Header as='h3'>
          <Header.Content>
            Experience
      <Header.Subheader>My journey since graduated from university</Header.Subheader>
          </Header.Content>
        </Header>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>Halal Informatics lab Sdn. Bhd. (Holisticslab Sdn, Bhd.)</Item.Header>
              <Item.Meta>
                <Header as='h5'>Apps Developer</Header>
                <p>June 2016 - Now</p>
              </Item.Meta>
              <Item.Description as='p'>
                Design and Develops a Mobile Auditing Tools namely QuikHalal in Hybrid Platform using Cordova, HTML, CSS & JS.
                Actively involve in managing IT technical staff and provide solution for internal operation.
                Design and Develops a Mobile Auditing Tools namely QuikHalal in Hybrid Platform using Cordova, HTML, CSS & JS.
                Actively involve in managing IT technical staff and provide solution for internal operation.
        </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content>
              <Item.Header>MySYSnet Sdn. Bhd.</Item.Header>
              <Item.Meta>
                <Header as='h5'>Software R&D Engineer</Header>
                <p>August 2014 - May 2016</p>
              </Item.Meta>
              <Item.Description as='p'>
                Involve in development of human resource management system for LHDNM using ASP.net & VB.net, MSSQL & Foxpro
        </Item.Description>
            </Item.Content>
          </Item>

        </Item.Group>

        <Divider />
        <Header as='h3'>
          <Header.Content>
            Education
      <Header.Subheader>Here my education background</Header.Subheader>
          </Header.Content>
        </Header>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>Bachelor Degree of Computer Science (Software Engineering)</Item.Header>
              <Item.Meta>
                <Header as='h5'>Universiti Teknologi Malaysia (UTM)</Header>
                <p>2010 - 2014</p>
                <p>CGPA 3.45</p>
              </Item.Meta>
              <Item.Description as='p'>
                Thesis title : Job4Me, A Hybrid Mobile Application for job searching.
               </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content>
              <Item.Header>Matriculation Certification</Item.Header>
              <Item.Meta>
                <Header as='h5'>Johore Matriculation College</Header>
                <p>2009 - 2010</p>
              </Item.Meta>
              <Item.Description as='p'>
                Executive member of “Perunding Rakan Dinamik” of Counseling units.
        </Item.Description>
            </Item.Content>
          </Item>

        </Item.Group>

        <Divider />
        <Header as='h3'>
          <Header.Content>
            Contact Information
      <Header.Subheader>
        <p>Contact me if you are intrested to know more and looking fowards to works together.</p>
              <p>mrahmatharun@gmail.com</p>
              <p>+60177908946</p><p>
                <a href="https://www.linkedin.com/in/rahmatharun/" target="_black">https://www.linkedin.com/in/rahmatharun/</a>
              </p>
            </Header.Subheader>
          </Header.Content>
        </Header>
      </div>
    );
  }
}

export default Cv;
