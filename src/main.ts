import './style.css';
import '@fontsource-variable/onest';

import { RESUME_DATA } from './data/resume-data.ts';

RESUME_DATA.skills.forEach((skill) => {
  const skillElement = document.createElement('span');
  skillElement.classList.add('py-0.5', 'px-3', 'bg-gray-100', 'rounded-md');
  skillElement.innerHTML = skill;

  document.getElementById('skills-list')!.appendChild(skillElement);
});
