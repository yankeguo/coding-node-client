# ApiUserUserData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Avatar** | **string** | 头像 | [default to '']
**DepartmentMember** | [**ApiUserUserDepartmentMember**](ApiUserUserDepartmentMember.md) |  | [default to undefined]
**Email** | **string** | 邮件 | [default to '']
**EmailValidation** | **number** | 邮件校验 | [default to 0]
**GlobalKey** | **string** | gk | [default to '']
**Id** | **number** | 用户ID | [default to 0]
**Name** | **string** | 用户名 | [default to '']
**NamePinYin** | **string** | 用户拼音名 | [default to '']
**Phone** | **string** | 手机号 | [default to '']
**PhoneValidation** | **number** | 手机校验 | [default to 0]
**Roles** | [**Array&lt;ApiUserRole&gt;**](ApiUserRole.md) | 角色 | [default to undefined]
**Status** | **number** | 用户状态 0不活跃，1活跃，-1被锁定，-2锁定登录，-3退出团队 | [default to StatusEnum_NUMBER_0]
**TeamId** | **number** | 团队ID | [default to 0]
**UniqueExtField** | **string** | 团队用户扩展字段、唯一。非必填 | [default to '']

## Example

```typescript
import { ApiUserUserData } from './api';

const instance: ApiUserUserData = {
    Avatar,
    DepartmentMember,
    Email,
    EmailValidation,
    GlobalKey,
    Id,
    Name,
    NamePinYin,
    Phone,
    PhoneValidation,
    Roles,
    Status,
    TeamId,
    UniqueExtField,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
