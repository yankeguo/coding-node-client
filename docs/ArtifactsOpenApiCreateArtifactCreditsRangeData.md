# ArtifactsOpenApiCreateArtifactCreditsRangeData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RemoteTeam** | [**ArtifactsOpenApiCreditRemoteTeam**](ArtifactsOpenApiCreditRemoteTeam.md) |  | [optional] [default to undefined]
**RangeType** | **string** | 生效范围（TEAM:团队；REMOTE_TEAM:远程团队；PROJECT:项目;REPO:仓库） | [default to '']
**RangeId** | **number** | 适用范围ID | [default to 0]

## Example

```typescript
import { ArtifactsOpenApiCreateArtifactCreditsRangeData } from './api';

const instance: ArtifactsOpenApiCreateArtifactCreditsRangeData = {
    RemoteTeam,
    RangeType,
    RangeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
