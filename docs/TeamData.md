# TeamData

团队和团队所有者信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TeamHost** | **string** | 团队域名 | [optional] [default to '']
**NamePinYin** | **string** | 团队名-拼音 | [optional] [default to '']
**Id** | **number** | 团队ID | [optional] [default to 0]
**TeamOwner** | [**UserData**](UserData.md) |  | [optional] [default to undefined]
**Avatar** | **string** | 团队图标 | [optional] [default to '']
**Name** | **string** | 团队名 | [optional] [default to '']
**IsVerification** | **boolean** | 是否实名认证 | [optional] [default to false]

## Example

```typescript
import { TeamData } from './api';

const instance: TeamData = {
    TeamHost,
    NamePinYin,
    Id,
    TeamOwner,
    Avatar,
    Name,
    IsVerification,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
