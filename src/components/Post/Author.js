import React from "react";
import PropTypes from "prop-types";

const Author = props => {
  const { note, theme } = props;

  return (
    <React.Fragment>
      <div className="author">
        <div className="note" dangerouslySetInnerHTML={{ __html: note }} />
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .author {
          margin: ${theme.space.l} 0;
          padding: ${theme.space.l} 0;
          border-top: 1px solid ${theme.line.color};
          border-bottom: 1px solid ${theme.line.color};
        }
        .note {
          font-size: 0.9em;
          line-height: 1.6;
        }
        @from-width tablet {
          .author {
            display: flex;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Author.propTypes = {
  note: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Author;
