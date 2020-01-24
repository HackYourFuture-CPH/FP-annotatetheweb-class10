import React, {Component} from 'react';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu.component';
import ProfileSummery from '../../components/ProfileSummary/ProfileSummary.component';
import Header from '../../components/Header/Header.Component';
import RegisterButton from '../../components/RegisterButton/RegisterButton.component';
import Button from '../../components/Button/Button.component';
import Footer from '../../components/Footer/Footer.component';
import samplePhoto from '../../assets/images/profile.png';
import './ProjectsPage.css';
import MenuButton from '../../components/MenuButton/MenuButton.component';
import MessageParagraph from '../../components/MessageParagraph/MessageParagraph.component';
import BlogCardList from '../../components/ListOfBlogCard/ListOfBlogCard.component';
import { Consumer } from '../../context/AuthContext';
import Loading from '../../components/Loading/Loading.component';
//import AnnotationWrapper from '../../components/Annotation/AnnotationWrapper';
import HomePageImage from '../../assets/images/HomePageImage.png';
//import AuthContext from '../../context/AuthContext';
import CustomAnnotation from '../../components/Annotation/CustomAnnotation.component';

class ProjectPage extends Component {
  //static contextType = AuthContext;
  constructor() {
    super();
    this.state = {
      user: null,
      annotations: null,
      //screenshot_key: this.context,
      screenshotImage: '',
     
    };
  }
  componentDidMount = ()=>{
    //console.log('didmount function',this.context);
    setInterval(() => {
      const screenshotImage =  this.getSnapshotImage('j0vaxc');
      if(screenshotImage)
        this.setState({screenshotImage});
    }, 1000);
  }
  getSnapshotImage = (key) =>{
    fetch( `https://annotatetheweb.z16.web.core.windows.net/${key}/screenshot.jpg`)
      .then(res =>res.json())
      .then(json => {
        console.log(json.url);
        this.setState({screenshotImage: json.url });
    })
  }
  onSave = (data, title, description, screenshotId) => {
    fetch('http://localhost:3000/api/annotations/', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        area: data,
        fk_screenshot_id: screenshotId,
      }),
    }).catch((error) => {
      throw error;
    });
  };
  
  render(){
    const profile = {
      src: samplePhoto,
      alt: 'profile image',
    };
    const headerTitle = "Annotate the web";
    const backgroundImage = {
      src: HomePageImage,
      alt: 'sample screenshot',
    };
    //const screenshotImage= this.props;
    return (
      <div>
      <div>
          {this.state.screenshotImage&&<Loading />}
        </div>
      {!this.state.screenshotImage&&    
      <div>
        <div className="project-page-container">
        <SidebarMenu />
        <div className="mobilemenu-menuwrap">
          <div className="header-mobile">
            <Header title ={headerTitle}/>
          </div>
          <MenuButton />
        </div>
        <div className ="screenshot-image-container">
          <CustomAnnotation
            screenshot={backgroundImage}
            onSave={({ data, title, description }) =>
              onSave(data, title, description, props.screenshotId)
            }
          />
        </div>

        <div className="project-page-rightside-container">
          <div className="project-page-rightside-innerContainer">
            <div>
              <Header title ={headerTitle}/>
            </div>
            {!this.state.user?
              <div className="login-block">
                <div >
                  <Button buttonClassName="project-page-button" title="Login"/>
                </div>
                <div >
                  <RegisterButton registerButtonTitle="Register" />
                </div>
              </div>
            :
              <div className="profile-container">
                <ProfileSummery profileName="Kseiina Zar" profileImage={profile}/>
              </div>
              }
            </div>
            {this.state.annotations?
            <div className="comment-container">
              <BlogCardList annotations={this.state.annotations}/>
            </div>:
              <MessageParagraph className ="no-comment-message"
                message="For now you do not have any annotations:)"/>
            }
          </div>
        </div>
        <div className="project-page-footer">
          <Footer />
        </div>
      </div>
  }
      </div>  
    );
  }   
};

export default ProjectPage;
