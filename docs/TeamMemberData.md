# TeamMemberData

团队成员分页信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageNumber** | **number** | 第几页 | [optional] [default to undefined]
**PageSize** | **number** | 每页条数 | [optional] [default to undefined]
**TeamMembers** | [**Array&lt;UserData&gt;**](UserData.md) | 成员列表信息 | [optional] [default to undefined]
**TotalCount** | **number** | 总条数 | [optional] [default to undefined]

## Example

```typescript
import { TeamMemberData } from './api';

const instance: TeamMemberData = {
    PageNumber,
    PageSize,
    TeamMembers,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
