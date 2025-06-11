# ArtifactsOpenApiCreditRemoteTeam


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RemoteTeamUrl** | **string** | 远程团队地址 | [default to '']
**UserName** | **string** | 用户名 | [default to '']
**RemoteRepos** | [**Array&lt;ArtifactsOpenApiRemoteRepoData&gt;**](ArtifactsOpenApiRemoteRepoData.md) | 远程仓库列表 | [default to undefined]
**Password** | **string** | 个人令牌base64编码 | [default to '']

## Example

```typescript
import { ArtifactsOpenApiCreditRemoteTeam } from './api';

const instance: ArtifactsOpenApiCreditRemoteTeam = {
    RemoteTeamUrl,
    UserName,
    RemoteRepos,
    Password,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
