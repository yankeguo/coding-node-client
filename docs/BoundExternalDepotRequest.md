# BoundExternalDepotRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CredentialUUID** | **string** | 当授权类型为USERNAME_PASSWORD时，填入和当前仓库用户名密码关联的凭证UUID | [optional] [default to undefined]
**DepotId** | **number** | 如果是跨项目代码仓库，则此字段必填，为源代码仓库id | [optional] [default to undefined]
**DepotType** | **string** | 仓库类型 | [default to undefined]
**ExternalDepotAddress** | **string** | 外部仓库标识 | [default to undefined]
**GrantType** | **string** | 如果是跨项目代码仓库，则需要填入“CODING_PERSONAL_CREDENTIAL”，其他外部仓库填入“OAUTH” | [optional] [default to undefined]
**ProjectId** | **number** | 项目 Id | [default to undefined]
**RepoUrl** | **string** | 当授权类型为USERNAME_PASSWORD时，填入外部仓库http格式的仓库地址 | [optional] [default to undefined]
**WebHook** | **boolean** | 是否开启 WebHook 一般都填写 true | [default to undefined]

## Example

```typescript
import { BoundExternalDepotRequest } from './api';

const instance: BoundExternalDepotRequest = {
    CredentialUUID,
    DepotId,
    DepotType,
    ExternalDepotAddress,
    GrantType,
    ProjectId,
    RepoUrl,
    WebHook,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
