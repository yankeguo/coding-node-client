# CreateGitDeployKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowWrite** | **boolean** | 是否授予写入权限 | [optional] [default to undefined]
**Content** | **string** | SSH key | [optional] [default to undefined]
**DepotId** | **number** | 仓库 Id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径 | [optional] [default to undefined]
**ExpirationDate** | **string** | 过期时间，不填则为永不过期 | [optional] [default to undefined]
**Title** | **string** | 部署公钥标题 | [optional] [default to undefined]

## Example

```typescript
import { CreateGitDeployKeyRequest } from './api';

const instance: CreateGitDeployKeyRequest = {
    AllowWrite,
    Content,
    DepotId,
    DepotPath,
    ExpirationDate,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
