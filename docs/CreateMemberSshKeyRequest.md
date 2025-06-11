# CreateMemberSshKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Content** | **string** | 公钥内容 | [default to undefined]
**ExpirationDate** | **string** | 过期时间，不填为永不过期 9999-12-31 | [optional] [default to undefined]
**MemberUserId** | **number** | 成员 Id | [default to undefined]
**Title** | **string** | 导入的 ssh key 标识名 | [default to undefined]

## Example

```typescript
import { CreateMemberSshKeyRequest } from './api';

const instance: CreateMemberSshKeyRequest = {
    Content,
    ExpirationDate,
    MemberUserId,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
