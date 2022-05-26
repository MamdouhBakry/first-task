import React, { useState } from 'react'
import "./ProjectManagements.css"
import { InputText } from 'primereact/inputtext';
import SearchIcon from '../../assets/svg/search.svg';
import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectManagements() {
  const [value3, setValue3] = useState('');

  const allProjects = [
    {
      title: "مشروع مصانع انتاج البن",
      projectDescription: "مناقصة مشروع مصانع انتاج البن",
      users: 7,
      modifications: 4
    }, {
      title: "مشروع مصانع انتاج البن",
      projectDescription: "مناقصة مشروع مصانع انتاج البن",
      users: 7,
      modifications: 4
    }, {
      title: "مشروع مصانع انتاج البن",
      projectDescription: "مناقصة مشروع مصانع انتاج البن",
      users: 7,
      modifications: 4
    }, {
      title: "مشروع مصانع انتاج البن",
      projectDescription: "مناقصة مشروع مصانع انتاج البن",
      users: 7,
      modifications: 4
    }, {
      title: "مشروع مصانع انتاج البن",
      projectDescription: "مناقصة مشروع مصانع انتاج البن",
      users: 7,
      modifications: 4
    }, {
      title: "مشروع مصانع انتاج البن",
      projectDescription: "مناقصة مشروع مصانع انتاج البن",
      users: 7,
      modifications: 4
    }, {
      title: "مشروع مصانع انتاج البن",
      projectDescription: "مناقصة مشروع مصانع انتاج البن",
      users: 7,
      modifications: 4
    }, {
      title: "مشروع مصانع انتاج البن",
      projectDescription: "مناقصة مشروع مصانع انتاج البن",
      users: 7,
      modifications: 4
    }
  ]
  return (
    <div className="project-managements">
      {/* header part */}
      <div className="project-management-header">
        <div className="title-search-side">
          <h2 className="title">جميع المشروعات</h2>
          <div className="top-left-section">
            <InputText
              type="email"
              className="search-doc"
              placeholder="بحث جميع المشروعات"
              tooltip=" بحث المستخدمين عن طريق اسم المشروع فقط"
              tooltipOptions={{ position: 'bottom', className: 'tooltipstyle' }}
            />
            <img style={{ marginTop: '10px' }} className="search-icon" src={SearchIcon} alt="SearchIcon" />
          </div>
        </div>
        <div className="fiter-category-newpro-side">
          <span className="filter">
            <i className="pi pi-filter ml-2"></i>
            <p>فلتر</p>
            <div className="filterline"></div>
          </span>
          <span className="category">
            <i className="pi pi-sort-amount-down ml-2"></i>
            <p>تصنيف</p>
            <div className="categoryline"></div>
          </span>
          <button className="new-project">مشروع جديد</button>
        </div>
      </div>

      <div className="grid mx-4">
        {
          allProjects.map((project) => (
            <ProjectCard title={project.title} projectDescription={project.projectDescription} users={project.users} modifications={project.modifications} />
          ))
        }
      </div>
    </div>
  )
}

export default ProjectManagements