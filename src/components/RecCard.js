import React from 'react'

function RecCard(props) {
    const {stack}=props;
  return (
    <div className="col-12 col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-text">
                {stack.title}
              </h4>
              <p className="card-text text-secondary mb-0">{stack.excerpt}</p>
              <p className="card-text text-secondary">
                {stack.company}
              </p>
            </div>
          </div>
        </div>
  )
}

export default RecCard;