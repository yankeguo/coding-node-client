# IssueFilterListData

事项过滤器列表数据结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomFilterList** | [**Array&lt;IssueFilter&gt;**](IssueFilter.md) | 自定义过滤器列表 | [optional] [default to undefined]
**SystemFilterList** | [**Array&lt;IssueFilter&gt;**](IssueFilter.md) | 系统过滤器列表 | [optional] [default to undefined]

## Example

```typescript
import { IssueFilterListData } from './api';

const instance: IssueFilterListData = {
    CustomFilterList,
    SystemFilterList,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
