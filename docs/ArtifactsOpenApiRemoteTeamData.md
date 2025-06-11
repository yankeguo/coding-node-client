# ArtifactsOpenApiRemoteTeamData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SyncMessage** | **string** | 下发信息 | [default to '']
**RemoteTeamUrl** | **string** | 团队地址 | [default to '']
**UserName** | **string** | 用户名 | [default to '']
**SyncStatus** | **number** | 下发状态 | [default to 0]
**Id** | **number** | ID | [default to 0]
**RemoteRepos** | [**Array&lt;ArtifactsOpenApiRemoteRepoData&gt;**](ArtifactsOpenApiRemoteRepoData.md) | 远程仓库列表 | [default to undefined]
**RemoteTeamName** | **string** | 远程团队名 | [default to '']
**Successful** | **boolean** | 是否成功 | [default to false]
**Deleting** | **boolean** | 是否删除 | [default to false]

## Example

```typescript
import { ArtifactsOpenApiRemoteTeamData } from './api';

const instance: ArtifactsOpenApiRemoteTeamData = {
    SyncMessage,
    RemoteTeamUrl,
    UserName,
    SyncStatus,
    Id,
    RemoteRepos,
    RemoteTeamName,
    Successful,
    Deleting,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
