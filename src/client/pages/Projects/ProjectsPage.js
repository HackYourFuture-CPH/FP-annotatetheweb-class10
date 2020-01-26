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
import BlogCardList from '../../container/BlogCardList/BlogCardList.component';
import { Consumer } from '../../context/AuthContext';
import Loading from '../../components/Loading/Loading.component';
import AnnotationWrapper from '../../components/Annotation/AnnotationWrapper';

class ProjectPage extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      screenshotImage: '',
      annotations: [],
      annotation: {},
      data: {},
    };
  }

  onChange = (annotation, value = {}) => {
    if (value.title !== undefined && value.description !== undefined) {
      this.setState({
        annotation,
        data: {
          title: value.title,
          description: value.description,
          id: Math.random() * 1000,
        },
      });
    } else {
      this.setState({ annotation });
    }
  };

  onSubmit = () => {
    const { annotation, annotations, data } = this.state;
    this.setState({
      annotation: {},
      annotations: annotations.concat({
        geometry: annotation.geometry,
        data: { ...data },
      }),
    });

    this.props.onSave({
      data: annotation.geometry,
      title: data.title,
      description: data.description,
    });
  };


  render(){
    const profile = {
      src: samplePhoto,
      alt: 'profile image',
    };
    const headerTitle = 'Annotate the web';
    return (
      <Consumer>
        {() => {
          return(
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
              <div className="screenshot-image-container">
                <AnnotationWrapper screenshotId={1}
                screenshotURL ="https://annotatetheweb.z16.web.core.windows.net/1l2w5s/screenshot.jpg"
                onChange ={this.onChange}
                onSubmit ={this.onSubmit}
                type={this.state.type}
                annotations={this.state.annotations}
                annotation={this.state.annotation}
                data={this.state.data}
                />
              </div>
              <div className="project-page-rightside-container">
                <div className="project-page-rightside-innerContainer">
                  <div>
                    <Header title ={headerTitle}/>
                  </div>
                  {this.state.user?
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
                  {this.state.annotations ?
                    <BlogCardList annotations={this.state.annotations}/>
                   :
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
          )
        }
      }
      </Consumer>
    );
  }
};

export default ProjectPage;
