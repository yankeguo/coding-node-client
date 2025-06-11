# ArtifactsOpenApiArtifactCreditsRangeData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Project** | [**ArtifactsOpenApiProjectData**](ArtifactsOpenApiProjectData.md) |  | [default to undefined]
**RemoteTeam** | [**ArtifactsOpenApiRemoteTeamData**](ArtifactsOpenApiRemoteTeamData.md) |  | [default to undefined]
**RangeType** | **string** | 生效范围（TEAM:团队；REMOTE-TEAM:远程团队；PROJECT:项目;REPO:仓库） | [default to '']
**Repository** | [**ArtifactsOpenApiRepositoryData**](ArtifactsOpenApiRepositoryData.md) |  | [default to undefined]
**RangeId** | **number** | 适用范围ID | [default to 0]

## Example

```typescript
import { ArtifactsOpenApiArtifactCreditsRangeData } from './api';

const instance: ArtifactsOpenApiArtifactCreditsRangeData = {
    Project,
    RemoteTeam,
    RangeType,
    Repository,
    RangeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
