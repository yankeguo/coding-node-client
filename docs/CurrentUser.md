# CurrentUser

当前用户信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Avatar** | **string** | 头像地址 | [optional] [default to '']
**Email** | **string** | 邮箱 | [optional] [default to '']
**EmailValidation** | **number** | 邮箱是否已验证 | [optional] [default to undefined]
**GlobalKey** | **string** | 用户唯一标志 | [optional] [default to '']
**Gravatar** | **string** | 无用头像 | [optional] [default to '']
**Id** | **number** | 用户 ID | [optional] [default to undefined]
**Name** | **string** | 姓名 | [optional] [default to '']
**NamePinYin** | **string** | 姓名拼音 | [optional] [default to '']
**Phone** | **string** | 联系电话 | [optional] [default to '']
**PhoneRegionCode** | **string** | 手机号地区 | [optional] [default to '']
**PhoneValidation** | **number** | 手机是否已验证 | [optional] [default to undefined]
**Region** | **string** | 区号 | [optional] [default to '']
**Status** | **number** | 状态(新用户/已激活) | [optional] [default to undefined]
**TeamId** | **number** | 团队 ID | [optional] [default to undefined]
**WeComId** | **string** | 企微id | [optional] [default to '']

## Example

```typescript
import { CurrentUser } from './api';

const instance: CurrentUser = {
    Avatar,
    Email,
    EmailValidation,
    GlobalKey,
    Gravatar,
    Id,
    Name,
    NamePinYin,
    Phone,
    PhoneRegionCode,
    PhoneValidation,
    Region,
    Status,
    TeamId,
    WeComId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
