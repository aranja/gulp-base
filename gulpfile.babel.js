import {sync} from 'glob';

sync('./gulp/tasks/*.js').forEach(task => require(task));
