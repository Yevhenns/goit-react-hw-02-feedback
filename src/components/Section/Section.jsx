import React from "react";
import PropTypes from 'prop-types'
import css from './Section.module.css'

const Section = ({ title, children }) => (
    <section className={css.section}><div className={css.container}>
        <h2 className={css.sectionTitle}>{title}</h2>
        {children}
        </div>
    </section>
)

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired
}