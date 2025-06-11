# ProjectMemberDepartmentMember


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RefId** | **number** | 部门成员refId | [default to undefined]
**Refs** | [**Array&lt;ProjectMemberMemberRef&gt;**](ProjectMemberMemberRef.md) | 关联信息 | [default to undefined]
**ThirdPartyAvatar** | **string** | 三方头像 | [default to '']
**ThirdPartyName** | **string** | 三方名 | [default to '']
**ThirdPartyId** | **string** | 三方ID，目前仅支持ldap的用户id信息 | [optional] [default to '']

## Example

```typescript
import { ProjectMemberDepartmentMember } from './api';

const instance: ProjectMemberDepartmentMember = {
    RefId,
    Refs,
    ThirdPartyAvatar,
    ThirdPartyName,
    ThirdPartyId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
