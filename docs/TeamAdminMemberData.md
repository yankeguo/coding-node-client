# TeamAdminMemberData

团队管理员分页数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Members** | [**Array&lt;TeamAdminMember&gt;**](TeamAdminMember.md) | 团队管理员列表信息 | [optional] [default to undefined]
**PageNumber** | **number** | 第几页 | [optional] [default to undefined]
**PageSize** | **number** | 每页条数 | [optional] [default to undefined]
**TotalCount** | **number** | 总条数 | [optional] [default to undefined]

## Example

```typescript
import { TeamAdminMemberData } from './api';

const instance: TeamAdminMemberData = {
    Members,
    PageNumber,
    PageSize,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
