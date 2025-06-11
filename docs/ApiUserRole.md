# ApiUserRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleId** | **number** | 用户组Id | [optional] [default to 0]
**RoleType** | **string** | 用户组类型： UserDefined 用户自定义的角色， EnterpriseOwner 企业所有者，EnterpriseAdmin 企业管理员， EnterpriseMember 企业普通成员， ProjectAdmin 项目管理员， ProjectMember 项目成员-&gt; 新的权限系统里面叫\&quot;开发\&quot;，ProjectGuest 项目受限成员 -&gt; 新的权限系统里面叫\&quot;测试\&quot;，ProjectManager 项目经理，ProductManager 产品经理，ProjectOperation 运维 ProgramOwner 项目集负责人，ProgramAdmin 项目集管理员，ProgramMember 项目集成员， ProgramProjectMember 项目集-项目成员 | [optional] [default to '']
**RoleTypeName** | **string** | 用户组类型名称 | [optional] [default to '']

## Example

```typescript
import { ApiUserRole } from './api';

const instance: ApiUserRole = {
    RoleId,
    RoleType,
    RoleTypeName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
