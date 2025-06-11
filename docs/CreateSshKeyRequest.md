# CreateSshKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Content** | **string** | 公钥内容 | [default to undefined]
**ExpirationDate** | **string** | 过期时间，不填为永不过期 9999-12-31 | [optional] [default to undefined]
**Title** | **string** | 导入的 ssh key 标识名 | [default to undefined]

## Example

```typescript
import { CreateSshKeyRequest } from './api';

const instance: CreateSshKeyRequest = {
    Content,
    ExpirationDate,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
