import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllProjectsByUserAction } from '../actions/projectActions';
import { getAllTicketsByUserAction } from '../actions/ticketActions';
// eslint-disable-next-line import/no-cycle
import ProjectCard from '../components/ProjectCard';
// eslint-disable-next-line import/no-cycle
import TicketCard from '../components/TicketCard';
import { getUserId } from '../helpers/getUserInfo';

function History({
  getAllProjectsAction,
  projects,
  getAllTicketsAction,
  tickets,
}) {
  useEffect(() => {
    getAllProjectsAction(getUserId());
    getAllTicketsAction(getUserId());
  }, []);

  return (
    <section className="page">
      <heading>
        <h1>History</h1>
      </heading>
      <article>
        <article className="archive">
          <h2>Archived Projects</h2>
          <section>
            {projects
              .filter((project) => project.status === 'archived')
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  status={project.status}
                  archived={project.archived}
                />
              ))}
          </section>
        </article>
        <article className="archive">
          <h2>Archived Tickets</h2>
          <section>
            {tickets
              .filter((ticket) => ticket.status === 'archived')
              .map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  id={ticket.id}
                  title={ticket.title}
                  description={ticket.description}
                  status={ticket.status}
                  bug={ticket.bug}
                  archived={ticket.archived}
                  projectId={ticket.project_id}
                />
              ))}
          </section>
        </article>
      </article>
    </section>
  );
}

History.propTypes = {
  getAllProjectsAction: PropTypes.func,
  getAllTicketsAction: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  projects: PropTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  tickets: PropTypes.array,
};

const mapStateToProps = (state) => ({
  projects: state.projectReducer.projects,
  tickets: state.ticketReducer.tickets,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllProjectsAction: getAllProjectsByUserAction,
  getAllTicketsAction: getAllTicketsByUserAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(History);
