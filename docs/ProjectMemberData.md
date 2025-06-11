# ProjectMemberData

项目成员分页信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageNumber** | **number** | 第几页 | [optional] [default to undefined]
**PageSize** | **number** | 每页条数 | [optional] [default to undefined]
**ProjectMembers** | [**Array&lt;ProjectMemberUserData&gt;**](ProjectMemberUserData.md) | 项目成员列表信息 | [optional] [default to undefined]
**TotalCount** | **number** | 总条数 | [optional] [default to undefined]

## Example

```typescript
import { ProjectMemberData } from './api';

const instance: ProjectMemberData = {
    PageNumber,
    PageSize,
    ProjectMembers,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
