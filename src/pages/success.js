import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";

const SuccessPage = props => {
  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="Success" theme={theme} />
            </header>
            <div>
              <p>Thank you.</p>
              <p>I will answer to your message as soon as possible.</p>
            </div>
          </Article>
        )}
      </ThemeContext.Consumer>
      {/* --- STYLES --- */}
      <style jsx>{`
        p {
          margin: 2em 0;
        }
      `}</style>
    </React.Fragment>
  );
};

SuccessPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default SuccessPage;
