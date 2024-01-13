import './style.css';
import '@fontsource/roboto-condensed/300.css';
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/700.css';
import '@fontsource-variable/roboto-mono';
import { RESUME_DATA } from './data/resume-data.ts';

RESUME_DATA.skills.forEach((skill) => {
  const skillElement = document.createElement('span');
  skillElement.classList.add('py-0.5', 'px-3', 'bg-gray-100', 'rounded-md');
  skillElement.innerHTML = skill;

  document.getElementById('skills-list')!.appendChild(skillElement);
});
