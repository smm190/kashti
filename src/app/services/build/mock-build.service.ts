import { Build } from '../../models/Build';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BuildService } from './build.service';
import { Builds } from '../../mock/builds';
import { filter } from 'rxjs/operators';

export class MockBuildService implements BuildService {
  getBuilds(projectId: string): Observable<Build[]> {
    const filteredList = Builds.filter(
      (build: Build) => build.project_id === projectId
    );
    return Observable.of(filteredList);
  }

  getBuild(buildId: string): Observable<Build> {
    const filteredList =
    Builds.filter((build: Build) => build.id === buildId);
  return Observable.of(filteredList[0]).delay(500);
  }
}
